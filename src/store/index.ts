import { createStore } from 'vuex'
import {NOTIFICATION_TYPE} from "@/enums/NotificationEnum";
import * as types from '@/constants/mutationTypes.ts';
import Notification from "@/types/Notification";

export default createStore({
  state: {
    allNotifications:<Notification[]> [
      {
        "id": 1,
        "mainTitle": "Leanne Graham",
        "subTitle": "New friend suggestion from Leanne Graham",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952",
        "type": NOTIFICATION_TYPE.FRIEND_SUGGESTION,
        "content": 'https://www.equatorial.by/sites/default/files/cusco001_11.jpg'
      },
      {
        "id": 2,
        "mainTitle": "Ervin Howell",
        "subTitle": "New video from Ervin Howell",
        "thumbnailUrl": "https://via.placeholder.com/150/771796",
        "type": NOTIFICATION_TYPE.VIDEO_POSTED,
        "content": 'https://www.youtube.com/embed/29ah0Ob2IOg'
      },
      {
        "id": 3,
        "mainTitle": "Clementine Bauch",
        "subTitle": "New link from Clementine Bauch",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355",
        "type": NOTIFICATION_TYPE.LINK_SHARED,
        "content": 'https://www.apple.com/iphone-13-pro/'
      },
      {
        "id": 4,
        "mainTitle": "Patricia Lebsack",
        "subTitle": "New link from Clementine Bauch",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776",
        "type": NOTIFICATION_TYPE.LINK_SHARED,
        "content": 'https://www.apple.com/airpods/'
      },
      {
        "id": 5,
        "mainTitle": "Chelsey Dietrich",
        "subTitle": "New friend suggestion from Chelsey Dietrich",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97",
        "type": NOTIFICATION_TYPE.FRIEND_SUGGESTION,
        "content": 'https://equatorial.by/sites/default/files/images/norge_fiord001.jpg'
      },
      {
        "id": 6,
        "mainTitle": "Mrs. Dennis Schulist",
        "subTitle": "New video from Mrs. Dennis Schulist",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2",
        "type": NOTIFICATION_TYPE.VIDEO_POSTED,
        "content": 'https://www.youtube.com/embed/29ah0Ob2IOg'
      },
      {
        "id": 7,
        "mainTitle": "Kurtis Weissnat",
        "subTitle": "New friend suggestion from Kurtis Weissnat",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc",
        "type": NOTIFICATION_TYPE.FRIEND_SUGGESTION,
        "content": 'https://www.equatorial.by/sites/default/files/cusco001_11.jpg'
      },
      {
        "id": 8,
        "mainTitle": "Nicholas Runolfsdottir V",
        "subTitle": "New video from Nicholas V",
        "thumbnailUrl": "https://via.placeholder.com/150/54176f",
        "type": NOTIFICATION_TYPE.VIDEO_POSTED,
        "content": 'https://www.youtube.com/embed/29ah0Ob2IOg'
      },
      {
        "id": 9,
        "mainTitle": "Glenna Reichert",
        "subTitle": "New link from Glenna Reichert",
        "thumbnailUrl": "https://via.placeholder.com/150/51aa97",
        "type": NOTIFICATION_TYPE.LINK_SHARED,
        "content": 'https://www.apple.com/apple-music/'
      },
      {
        "id": 10,
        "mainTitle": "Clementina DuBuque",
        "subTitle": "New link from Clementina DuBuque",
        "thumbnailUrl": "https://via.placeholder.com/150/810b14",
        "type": NOTIFICATION_TYPE.LINK_SHARED,
        "content": 'https://www.apple.com/shop/accessories/all'
      },
    ]
  },
  getters: {
    allNotifications: (state) => state.allNotifications
  },
  mutations: {
    [types.SET_ALL_NOTIFICATIONS] (state, { data }) {
      state.allNotifications = data;
    }
  },
  actions: {
    setAllNotifications ({ commit }, data) {
      commit(types.SET_ALL_NOTIFICATIONS, { data });
    }
  },
})
