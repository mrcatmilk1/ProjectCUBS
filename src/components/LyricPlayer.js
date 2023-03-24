import React, { useState, useEffect, useRef } from 'react';
import { parseString } from 'xml2js';

export const LyricPlayer = ({ music_url, title, artist, album_url, lyrics }) => {

    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const contentRef = useRef(null);
    const videoRef = useRef(null);

    const align = () => {
        const highlightedElement = document.querySelector('.highlighted');
        if (highlightedElement && contentRef.current) {
            const highlightedHeight = highlightedElement.offsetHeight;
            const contentHeight = contentRef.current.offsetHeight;
            const highlightedTop = highlightedElement.offsetTop;
            const scrollValue = highlightedTop - (contentHeight - highlightedHeight) / 2;
            contentRef.current.scrollTop = scrollValue;
        }
    };


    const handleTimeUpdate = () => {
        const time = videoRef.current.currentTime * 1000;
        console.log('time', time);
        const past = lyrics.filter((item) => item.time < time);
        if (past.length !== currentLineIndex) {
            setCurrentLineIndex(past.length - 1);
            align();
        }
    };

    function extractKoreanWords(sentence) {
        const koreanRegex = /[\uAC00-\uD7AF]+/g;
        const matches = sentence.match(koreanRegex);
        return matches;
    }

    async function getKoreanDefinition(word) {
        // var myHeaders = new Headers();
        // myHeaders.append("Access-Control-Allow-Origin", "http://localhost:3000");
        // myHeaders.append("Access-Control-Allow-Credentials", "true");
        var requestOptions = {
            method: 'GET',
            // headers: myHeaders,
            redirect: 'follow'
        };

        const result = await fetch(`https://krdict.korean.go.kr/api/search?key=313D5A71F45A553EE6F384880AD5CB9C&q=${word}&translated=y&trans_lang=1`, requestOptions)
        const text = await result.text();
        // console.log("text", text);
        parseString(text, (err, res) => {
            const definition = res.channel.item?.[0].sense?.[0].translation?.[0].trans_dfn?.[0];
            definition ? alert(definition) : alert("no def found");
        })      
    }

    // channel.item?.[0].sense?.[0].translation?.[0].trans_dfn?.[0]

    function generateLyric(sentence) {
        if (sentence === "") {
            return '•'
        } else {
            const words = sentence.split(/\s+/);
            const koreanWords = extractKoreanWords(sentence);
            const lyrics = words.map(word => {
                if (koreanWords?.includes(word)) {
                    return (
                        <a onClick={() => getKoreanDefinition(word)}> {word} </a>
                    )
                }
            });
            return lyrics;
        }
    }

    useEffect(() => {
        window.addEventListener('resize', align);
        return () => {
            window.removeEventListener('resize', align);
        };
    }, []);

    return (
        <div className="pbody">
            <div className="content" ref={contentRef}>
                <div className="lyrics">
                    {lyrics.map((item, index) => {

                        console.log("item", item.line);
                        console.log("korean", extractKoreanWords(item.line));
                        return (
                            <div
                                key={index}
                                className={currentLineIndex === index ? 'highlighted' : ''}
                                note={item.note}
                            >
                                {generateLyric(item.line)}
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="player">
                <div className="left" style={{ backgroundImage: `url(${album_url})` }}></div>
                <div className="right">
                    <div className="top">
                        <a className="song">{title}</a>
                        <a className="artist">{artist}</a>
                    </div>
                    <div className="bottom">
                        <video
                            ref={videoRef}
                            controls={true}
                            autoPlay={true}
                            name={"media"}
                            loop={true}
                            onTimeUpdate={handleTimeUpdate}
                        >
                            <source src={music_url} type="audio/mpeg"></source>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};
