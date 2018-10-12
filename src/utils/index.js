import * as fetch from 'axios'

export function 
formaDate(unix) {
    function fixednum(num) {
        return num >= 10 ? ('' + num) : ('0' + num)
    }

    let date = new Date(unix)

    let year = date.getFullYear();
    let month = fixednum(date.getMonth());
    let day = fixednum(date.getDate());
    let hour = fixednum(date.getHours());
    let min = fixednum(date.getMinutes());
    let sec = fixednum(date.getSeconds());

    let timeStr = `${year}-${month}-${day} ${hour}-${min}-${sec}`
    return timeStr
}

const instance = fetch.create({
    baseURL: ' ',
    timeout: 10000,
});

export const axios = {
    get (url,data,config) {
        return new Promise((resolve,reject)=>{
            instance.get(url,{params: data},config).then(res => {
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    fatch(url, data, config, methods){
        return new Promise((resolve, reject) => {
            instance[methods](url, data, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post(url, data, config){
        return this.fatch(url, data, config, 'post')
    },
    del(url, data, config){
        return this.fatch(url, data, config, 'delete')
    },
}

