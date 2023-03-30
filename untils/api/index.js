import http from "../request"

function getList(data) {
    return http({
        url: '/cloud/h8_transparent.json',// 放入除了baseUrl 的路径
        data,//参数,
        method: "GET",

    })
}
export { getList }
