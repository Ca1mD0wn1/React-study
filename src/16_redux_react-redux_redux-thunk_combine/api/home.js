export function getBannerList () {
  return fetch('http://121.89.205.189:3001/api/banner/list').then(res => res.json())
}

export function getProList (params) {
  return fetch('http://121.89.205.189:3001/api/pro/list?limitNum=' + params.limitNum).then(res => res.json())
}