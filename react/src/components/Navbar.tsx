import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";

import "../styles/dialog.css";
import { FaBars, FaUser } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const ref = useRef<any>(null);

  const { isSignedIn } = useAuth();
  const { user } = useUser();

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      {/** mobile */}
      <div ref={ref}>
        <nav className="flex bg-black/70 sm:hidden justify-between h-16 !glow-blue-box items-center border-b-2 border-gray-900 shadow-lg px-3 w-screen" >
          <div
            className="justify-start gx flex flex-row space-x-1 items-center font-heading"
            role="button"
          >
            <svg
              version="1.1"
              id="_x32_"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              className="glow-orange"
              fill="#000000"
              style={{ width: "32px", height: "32px" }}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {" "}
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{ __html: " .st0{fill:#e8e8e8;} " }}
                />{" "}
                <g>
                  {" "}
                  <rect
                    x="207.086"
                    y="496.19"
                    className="st0"
                    width="140.908"
                    height="15.81"
                  />{" "}
                  <path
                    className="st0"
                    d="M472.271,113.106c-13.991-49.444-54.964-70.478-101.933-62.483c-43.254,7.362-65.847,61.281-76.372,93.978 c3.124-43.308-4.871-103.534-56.541-131.656C158.477-30.028,108.51,46.922,103.513,56.915c-4.997,9.994-5.013,11.906,8.994,10.993 c4.169-0.273,40.505-10.5,76.153-4.052l16.786-15.474l7.776,21.806c29.544,10.352,53.247,36.882,57.51,76.661 c-23.968-29.466-60.929-48.437-102.558-48.437c-72.39,0-131.055,57.079-131.055,127.487c0,5.668,0.11,1.6,0.11,1.6 c0.203,2.67,1.951,4.974,4.466,5.888c2.514,0.906,5.34,0.257,7.198-1.663c0,0,1.467-2.272,8.026-8.268 c11.555-10.572,24.265-19.885,37.881-27.826l12.446-23.242l16.801,8.924c25.218-10.048,52.716-15.591,81.51-15.591 c19.003,0,37.443,2.413,55.026,6.933c-40.552-2.685-101.684,18.457-125.886,70.071c-29.98,63.958-0.468,114.722,3.794,118.696 c3.498,3.256,7.729,0.719,8.869-4.958c2.514-12.406,9.4-35.594,22.048-61.6l-5.106-20.626l14.053,3.598 c17.629-31.073,43.425-63.7,79.932-85.678c-21.877,48.196-40.63,113.715-31.495,197.012H52.546v15.81H228.79 c2.17,14.522,5.231,29.582,9.228,45.142h-87.536v15.81h91.752h86.896h58.196v-15.81h-71.063 c-7.136-10.127-16.145-25.186-24.046-45.142h176.26v-15.81H286.58c-13.741-42.964-20.705-104.088,0.188-183.894 c9.962,12.874,22.641,31.557,33.212,54.316l13.382,1.687l-5.981,16.005c7.324,19.597,12.601,41.489,13.335,64.918 c0.187,5.981,3.794,10.408,5.637,6.489c28.231-60.164,19.346-121.741-20.221-157.67c24.952,8.229,45.346,28.294,61.226,51.247 l18.956,4.068l-3.529,21.361c13.288,25.28,21.455,50.311,24.359,64.661c1.156,5.652,4.154,9.338,7.761,2.905 c21.548-38.335,24.327-111.896-14.6-152.166c-30.184-31.214-83.446-33.268-116.237-24.617 c21.533-36.203,79.136-38.897,79.136-38.897s9.119-20.986,11.118-23.984c1.999-2.998,12.992,20.44,12.992,20.44l58.008,23.695 c0,0,7.449,5.091,8.9-3.56C475.097,130.945,475.628,122.896,472.271,113.106z"
                  />{" "}
                </g>{" "}
              </g>
            </svg>
            <span className="glow-orange"></span>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              className="inline-flex gx glow-xy-box border-gray-700 items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 relative"
              aria-label="Open cart"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r52:"
              data-state="closed"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <circle cx={8} cy={21} r={1} />
                <circle cx={19} cy={21} r={1} />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
            </button>
            <div role="button" onClick={() => setNavOpen(!navOpen)} className="glow-blue-box-4 items-center hover:text-slate-400 border p-2 rounded-md justify-center inline-flex border-gray-900">
              {navOpen ? <FaBarsStaggered size={18} /> : <FaBars size={18} />}
            </div>
          </div>
        </nav>

        {navOpen && (
          <div className="sm:hidden text-center align-left flex flex-col items-center justify-center mt-0 p-3 pb-4 rounded-b-xl bg-black/90 glow-bottom-blue rounded-lg">
            <div>
            </div>

            {isSignedIn ? (
              <Link
                className="w-full glow-blue-box-3 gx items-center justify-center rounded-lg text-sm font-medium transition-colors border border-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 shadow hover:bg-blue-700 h-9 py-2 whitespace-nowrap px-3 mt-4 rounded-md"
                to="/app"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                className="w-full glow-blue-box-3 gx items-center justify-center rounded-lg text-sm font-medium transition-colors border border-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 shadow hover:bg-blue-700 h-9 py-2 whitespace-nowrap px-3 mt-4 rounded-md"
                to="/sign-in"
              >
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>



      {/** desktop */}
      <nav className="hidden fixed sm:flex h-16 glow-blue-box items-center justify-between border-b-2 border-gray-900 shadow-lg px-3 w-screen">
        <div
          className="justify-start gx flex flex-row space-x-1 items-center font-heading"
          role="button"
        >
          <svg
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            className="glow-orange"
            fill="#000000"
            style={{ width: "32px", height: "32px" }}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <style
                type="text/css"
                dangerouslySetInnerHTML={{ __html: " .st0{fill:#e8e8e8;} " }}
              />{" "}
              <g>
                {" "}
                <rect
                  x="207.086"
                  y="496.19"
                  className="st0"
                  width="140.908"
                  height="15.81"
                />{" "}
                <path
                  className="st0"
                  d="M472.271,113.106c-13.991-49.444-54.964-70.478-101.933-62.483c-43.254,7.362-65.847,61.281-76.372,93.978 c3.124-43.308-4.871-103.534-56.541-131.656C158.477-30.028,108.51,46.922,103.513,56.915c-4.997,9.994-5.013,11.906,8.994,10.993 c4.169-0.273,40.505-10.5,76.153-4.052l16.786-15.474l7.776,21.806c29.544,10.352,53.247,36.882,57.51,76.661 c-23.968-29.466-60.929-48.437-102.558-48.437c-72.39,0-131.055,57.079-131.055,127.487c0,5.668,0.11,1.6,0.11,1.6 c0.203,2.67,1.951,4.974,4.466,5.888c2.514,0.906,5.34,0.257,7.198-1.663c0,0,1.467-2.272,8.026-8.268 c11.555-10.572,24.265-19.885,37.881-27.826l12.446-23.242l16.801,8.924c25.218-10.048,52.716-15.591,81.51-15.591 c19.003,0,37.443,2.413,55.026,6.933c-40.552-2.685-101.684,18.457-125.886,70.071c-29.98,63.958-0.468,114.722,3.794,118.696 c3.498,3.256,7.729,0.719,8.869-4.958c2.514-12.406,9.4-35.594,22.048-61.6l-5.106-20.626l14.053,3.598 c17.629-31.073,43.425-63.7,79.932-85.678c-21.877,48.196-40.63,113.715-31.495,197.012H52.546v15.81H228.79 c2.17,14.522,5.231,29.582,9.228,45.142h-87.536v15.81h91.752h86.896h58.196v-15.81h-71.063 c-7.136-10.127-16.145-25.186-24.046-45.142h176.26v-15.81H286.58c-13.741-42.964-20.705-104.088,0.188-183.894 c9.962,12.874,22.641,31.557,33.212,54.316l13.382,1.687l-5.981,16.005c7.324,19.597,12.601,41.489,13.335,64.918 c0.187,5.981,3.794,10.408,5.637,6.489c28.231-60.164,19.346-121.741-20.221-157.67c24.952,8.229,45.346,28.294,61.226,51.247 l18.956,4.068l-3.529,21.361c13.288,25.28,21.455,50.311,24.359,64.661c1.156,5.652,4.154,9.338,7.761,2.905 c21.548-38.335,24.327-111.896-14.6-152.166c-30.184-31.214-83.446-33.268-116.237-24.617 c21.533-36.203,79.136-38.897,79.136-38.897s9.119-20.986,11.118-23.984c1.999-2.998,12.992,20.44,12.992,20.44l58.008,23.695 c0,0,7.449,5.091,8.9-3.56C475.097,130.945,475.628,122.896,472.271,113.106z"
                />{" "}
              </g>{" "}
            </g>
          </svg>
          <span className="glow-orange">Nano Gift</span>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <button
            className="inline-flex gx glow-y-box border-gray-700 items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 relative"
            aria-label="Open cart"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r52:"
            data-state="closed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <circle cx={8} cy={21} r={1} />
              <circle cx={19} cy={21} r={1} />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </button>
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <button className="inline-flex glow-x-box gx cursor-text border-gray-700 items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-search h-4 w-4 xl:mr-2"
                  aria-hidden="true"
                >
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <span className="hidden xl:inline-flex">Search...</span>
                <span className="sr-only">Search products</span>
                <kbd className="select-none cursor-pointer absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 border-gray-700 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
                  <abbr title="Control">⌘</abbr>K
                </kbd>
              </button>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
              <AlertDialog.Overlay className="AlertDialogOverlay" />
              <AlertDialog.Content className="AlertDialogContent">
                <AlertDialog.Title className="AlertDialogTitle mb-4">
                  Indexing is not supported in this context
                </AlertDialog.Title>
                <AlertDialog.Description className="AlertDialogDescription">
                  This component is part of the layout but not functional in home page yet. Sorry!
                </AlertDialog.Description>
                <div
                  style={{
                    display: "flex",
                    gap: 25,
                    justifyContent: "flex-end",
                  }}
                >
                  <AlertDialog.Action asChild>
                    <button className="Button red w-full">Close Modal</button>
                  </AlertDialog.Action>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog.Root>
          <div className="hidden sm:block space-x-2">
            <a
              target="_blank"
              rel="noreferrer"
              className="inline-flex glow-blue-box-4 gx items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 border-gray-700"
              href="https://x.com/write_int"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1DA1F2"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter h-4 w-4"
                aria-hidden="true"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">X (known as Twitter)</span>
            </a>
            <a
              target="_blank"
              className="inline-flex glow-silver-box gx items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 border-gray-700"
              href="https://github.com/WriteNaN/NanoGift"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C0C0C0"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github h-4 w-4"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              target="_blank"
              className="inline-flex glow-blue-box-2 gx items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 border-gray-700"
              href="https://discord.gg/mtYCmKmFBD"
            >
              <svg
                width={15}
                height={15}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z"
                  fill="#5865F2"
                />
              </svg>
            </a>
          </div>
          {isSignedIn ?
            (
              <Link
                to="/app"
                className="inline-flex items-center justify-center px-3 py-2 space-x-1 text-sm font-medium text-white transition-colors bg-blue-600 border border-blue-600 rounded-lg shadow hover:bg-blue-700 glow-blue-box-3 focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none"
              >
                <FaUser className="text-blue-200" />
                <span className="whitespace-nowrap">Hi, {user?.firstName}</span>
              </Link>
            ) :
            (<Link
              className="inline-flex glow-blue-box-3 gx items-center justify-center rounded-lg text-sm font-medium transition-colors border border-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 shadow hover:bg-blue-700 h-9 py-2 whitespace-nowrap px-3"
              to="/sign-in"
            >
              Sign In
            </Link>)
          }
        </div>
      </nav>
    </>
  );
}
