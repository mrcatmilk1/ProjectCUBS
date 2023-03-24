import { get, ref, set } from "firebase/database";
import { database } from "./Firebase";

export const db_create = (path, input) => {
    const db_ref = ref(database, path);
    set(db_ref, input)
}

export const db_get = (path) => {
    const db_ref = ref(database, path);
    const result = get(db_ref).then(snapshot => {
        return snapshot.val()
    })
    return result;
}