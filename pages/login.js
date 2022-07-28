import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useSetUser, useUser } from "../components/auth";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const setUser = useSetUser();
  const user = useUser();
  const [userInp, setUserInp] = useState("");
  const [passwordInp, setPasswordInp] = useState("");
  const [error, setError] = useState("");
  function submit(e) {
    e.preventDefault();
    axios
      .post("/api/login/", { username: "admin", password: "12" })
      .then(function (response) {
        // setUser(response.data);
        // router.push(router.query.next ?? "/");
        router.replace("/admin/dashboard/");
        console.log(response.data);
      })
      .catch(function (err) {
        setError(err);
        console.log(err);
      });
  }
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex justify-center items-center bg-gradient">
        <form
          className="flex flex-col items-center space-y-6"
          onSubmit={submit}
        >
          <p className="uppercase text-4xl text-white mt-4">member login</p>
          <svg
            className="fill-white w-32 h-32 mt-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
          </svg>
          <div className="relative mt-4">
            <div className="absolute inset-y-0 flex items-center px-3 border-login my-1">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1211 15.8969C16.679 14.8496 16.0374 13.8984 15.232 13.0961C14.4291 12.2915 13.478 11.65 12.4312 11.207C12.4219 11.2023 12.4125 11.2 12.4031 11.1953C13.8633 10.1406 14.8125 8.42266 14.8125 6.48438C14.8125 3.27344 12.2109 0.671875 9 0.671875C5.78906 0.671875 3.1875 3.27344 3.1875 6.48438C3.1875 8.42266 4.13672 10.1406 5.59687 11.1977C5.5875 11.2023 5.57812 11.2047 5.56875 11.2094C4.51875 11.6523 3.57656 12.2875 2.76797 13.0984C1.96338 13.9013 1.32188 14.8524 0.878904 15.8992C0.443721 16.924 0.209018 18.0228 0.187498 19.1359C0.186872 19.161 0.19126 19.1858 0.200402 19.2091C0.209544 19.2324 0.223256 19.2537 0.24073 19.2716C0.258203 19.2895 0.279085 19.3037 0.302145 19.3134C0.325204 19.3231 0.349975 19.3281 0.374998 19.3281H1.78125C1.88437 19.3281 1.9664 19.2461 1.96875 19.1453C2.01562 17.3359 2.74218 15.6414 4.02656 14.357C5.35547 13.0281 7.12031 12.2969 9 12.2969C10.8797 12.2969 12.6445 13.0281 13.9734 14.357C15.2578 15.6414 15.9844 17.3359 16.0312 19.1453C16.0336 19.2484 16.1156 19.3281 16.2187 19.3281H17.625C17.65 19.3281 17.6748 19.3231 17.6978 19.3134C17.7209 19.3037 17.7418 19.2895 17.7593 19.2716C17.7767 19.2537 17.7904 19.2324 17.7996 19.2091C17.8087 19.1858 17.8131 19.161 17.8125 19.1359C17.7891 18.0156 17.557 16.9258 17.1211 15.8969ZM9 10.5156C7.92422 10.5156 6.91172 10.0961 6.15 9.33438C5.38828 8.57266 4.96875 7.56016 4.96875 6.48438C4.96875 5.40859 5.38828 4.39609 6.15 3.63437C6.91172 2.87266 7.92422 2.45312 9 2.45312C10.0758 2.45312 11.0883 2.87266 11.85 3.63437C12.6117 4.39609 13.0312 5.40859 13.0312 6.48438C13.0312 7.56016 12.6117 8.57266 11.85 9.33438C11.0883 10.0961 10.0758 10.5156 9 10.5156Z"
                  fill="#116EEE"
                />
              </svg>
            </div>
            <input
              className="rounded py-3 pl-14 pr-4 outline-none focus:bg-slate-200 w-login"
              type="text"
              placeholder="Username"
              required
              value={userInp}
              onChange={(e) => {
                setUserInp(e.target.value);
              }}
            />
          </div>
          <div className="relative mt-4">
            <div className="absolute inset-y-0 flex items-center px-3 border-login my-1">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 8.875H14.9062V3.625C14.9062 1.96797 13.5633 0.625 11.9062 0.625H6.09375C4.43672 0.625 3.09375 1.96797 3.09375 3.625V8.875H1.5C1.08516 8.875 0.75 9.21016 0.75 9.625V18.625C0.75 19.0398 1.08516 19.375 1.5 19.375H16.5C16.9148 19.375 17.25 19.0398 17.25 18.625V9.625C17.25 9.21016 16.9148 8.875 16.5 8.875ZM4.78125 3.625C4.78125 2.90078 5.36953 2.3125 6.09375 2.3125H11.9062C12.6305 2.3125 13.2188 2.90078 13.2188 3.625V8.875H4.78125V3.625ZM15.5625 17.6875H2.4375V10.5625H15.5625V17.6875ZM8.34375 14.4297V15.6719C8.34375 15.775 8.42812 15.8594 8.53125 15.8594H9.46875C9.57187 15.8594 9.65625 15.775 9.65625 15.6719V14.4297C9.84972 14.2908 9.99413 14.0941 10.0687 13.8679C10.1432 13.6417 10.1441 13.3977 10.0711 13.1709C9.99818 12.9442 9.85516 12.7465 9.66268 12.6062C9.47019 12.466 9.23817 12.3904 9 12.3904C8.76183 12.3904 8.52981 12.466 8.33732 12.6062C8.14484 12.7465 8.00182 12.9442 7.92886 13.1709C7.8559 13.3977 7.85676 13.6417 7.93132 13.8679C8.00588 14.0941 8.15028 14.2908 8.34375 14.4297Z"
                  fill="#116EEE"
                />
              </svg>
            </div>
            <input
              className="rounded py-3 pl-14 pr-11 outline-none focus:bg-slate-200 w-login"
              type={visible ? "text" : "password"}
              placeholder="Password"
              required
              value={passwordInp}
              autoComplete="on"
              onChange={(e) => {
                setPasswordInp(e.target.value);
              }}
            />
            <div className="absolute inset-y-0 flex items-center right-3">
              <div
                className="cursor-pointer select-none"
                onClick={() => {
                  setVisible(!visible);
                }}
              >
                {visible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#116EEE]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#116EEE]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>

          {error && (
            <span className="text-red-600 mt-4">
              {error === 400
                ? "Incorrect username or password"
                : "Bad network connection"}
            </span>
          )}
          <div className="mt-8">
            <input
              className="text-white w-60 bg-blueGray-700 transition-all duration-300 rounded text-lg py-3 inline-block cursor-pointer"
              type="submit"
              value="Login"
            />
          </div>
        </form>
      </div>
    </>
  );
}
