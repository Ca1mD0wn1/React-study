export function getKindList () {
  return fetch('http://121.89.205.189:3001/api/pro/categorylist').then(res => res.json())
}