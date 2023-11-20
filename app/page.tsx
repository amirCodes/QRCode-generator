"use client";
import React, {useState } from "react";
import Image from "next/image";
import QRCode from "qrcode";
import { saveAs } from "file-saver";
import { Footer } from "./components/Footer";
export default function Home() {
  const [url, setUrl] = useState<any >("https://amircodes.github.io/codes");
  const [qrcode, setQrcode] = useState<any>("./next.svg");
  const [bgColor, setBGColor] = useState("#FFFFFF");
  const [qrcodeColor, setQrcodeColor] = useState("#000");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

 
  const downloadQrcode = () => {
    saveAs(qrcode, "QR Code.jpg"); 
  };

  const generateQR = async (e: any) => {
    // options and setting for the QR code 
    var opts = {
      errorCorrectionLevel: "H",
      type: "image/jpeg",
      quality: 0.3,
      margin: 1,
      color: {
        dark: qrcodeColor,
        light: bgColor,
      },
    };
    // e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const dataUrl = await QRCode.toDataURL(url, opts);
      // const result = await response.text();
      setQrcode(dataUrl);
      // console.log(dataUrl);
    } catch (error) {
      // Capture the error message to display to the user
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
// Generate the QRCode afeter submit or clicking generate QR code button
  const handleSubmit = (e:any) => {
    e.preventDefault();
    generateQR(url);
  };
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left p-24">
        <div
          className="group w-full rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <form onSubmit={handleSubmit}>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Generate your QR code and can slecte the color and its background too
            </p>
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
              <div className="mt-1 justify-center items-center flex text-center">
              QR Code color
                <input
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  className="ًrounded-lg caret-blue-500 focus:caret-indigo-500"
                  value={qrcodeColor}
                  onChange={(e) => setQrcodeColor(e.target.value)}
                />
                Background Color
                <input
                  type="color"
                  id="favcolor"
                  name="favcolor"
                  className="ًrounded-lg caret-blue-500 focus:caret-indigo-500"
                  value={bgColor}
                  onChange={(e) => setBGColor(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                disabled={!url || isLoading}
                // onClick={() => generateQRCode()}
                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? "Loading..." : "Generate QRCode"}
              </button>
            </div>
          </form>
        </div>

        <div
          className="group rounded-lg justify-center items-center text-center border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-2 text-2xl font-semibold`}>
            Here is your QR Code
          </h2>
          <p className={`mb-2 w-full text-sm opacity-50`}>
            You may download and save the QR Code or regenerate another one
          </p>
          <br />

          <Image
            width={400}
            height={400}
            src={qrcode}
            className="rounded-lg"
            alt="qrcode"
          />
          <button
            onClick={downloadQrcode}
            className="p-2 px-3 mt-4 rounded-lg transition-all duration-150 ease-in-out text-white border-2 border-gray-300 bg-indigo-600 hover:bg-green-700 "
          >
            Download QR Code
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
