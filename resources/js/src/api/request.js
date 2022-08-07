// requeste and dispatch to redux

import HTTP_CLIENT, { handlingErrors } from "./client";

const FILE_HEADERS = {
    headers: { "Content-Type": "multipart/form-data" },
};

export const signinUsers = (params) =>
    new Promise((resolve, reject) => {
        HTTP_CLIENT.post("signin", params)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                const message = handlingErrors(error);
                reject(message);
            });
    });

