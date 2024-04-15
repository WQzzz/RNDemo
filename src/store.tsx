import { configureStore } from '@reduxjs/toolkit'
import messageDataReducer from './features/messageData/messageDataSlice'

export default configureStore({
  reducer: {messageData:messageDataReducer},
})