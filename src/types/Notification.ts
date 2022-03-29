interface Notification {
  id: number,
  mainTitle: string,
  subTitle: string,
  thumbnailUrl: string,
  type: string,
  seen: boolean,
  content: string,
}

export default Notification
