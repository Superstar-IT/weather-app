import React from "react"
import { wrapper } from "../store/store"
import 'tailwindcss/tailwind.css'

const MyApp = ({ Component, pageProps}) => (
  <Component {...pageProps} />
)

export default wrapper.withRedux(MyApp);