const http = {};

http.get = (url) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", url);
        request.addEventListener('load', () => {
            // リクエストが成功したかを判定する
            // どこまで抽象化させるかというのはあるがAPIの仕様に応じて調整
            if (request.status >= 200 && request.status < 300) {
                return resolve(JSON.parse(request.responseText));
            } else {
                return reject(new Error('エラーレスポンス: ' + request.status));
            }
        });
        request.addEventListener("error", () => {
            return reject(new Error('ネットワークエラー'));
        });
        request.send();
    })
}

export {
    http
};