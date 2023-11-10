"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("./next.svg");
  const generateQRCode = (e: any) => {
    // here we will call the API and generate the qrcode
    e.preventDefault();
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <div
          className="group w-full rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <form>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>
            <label>{url}</label>
            <div className="col-span-full mt-2">
              <label
                htmlFor="url"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Key in your URL to generate the QRCode
              </label>
              <div className="mt-1">
                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  type="text"
                  name="url"
                  id="url"
                  autoComplete="url"
                  placeholder="https://amircodes.github.io/codes"
                  className="block w-full rounded-md border-0  px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                onClick={generateQRCode}
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Generate QRCode
              </button>
            </div>
          </form>
        </div>

        <div
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-2 text-2xl font-semibold`}>
            Here is your QR Code
          </h2>
          <p className={`mb-2 w-full text-sm opacity-50`}>
            You may download and save it or regenerate another one
          </p>
          <Image
            width={400}
            height={400}
            src={qrcode}
            className="rounded-lg"
            alt="qrcode"
          />
        </div>
      </div>
    </main>
  );
}
