"use client";
import React from "react";
function Home() {
  return (
    <div className="absolute top-[730px] md:top-[910px] bg-black w-full ">
      <div className="p-1 bg-[#333]"></div>
      <div className="flex flex-col md:flex-row justify-around bg-black mix-blend-screen">
        <img
          className="pb-14 md:pl-36"
          src="https://i.postimg.cc/TY7PjSR3/feature-1.png"
          alt=""
        />
        <div className="p-7 md:p-10 md:pt-24">
          <h1 className="font-bold text-2xl pb-5 md:text-5xl md:pt-10">
            Enjoy on your TV
          </h1>
          <p className="text-xl md:text-2xl md:w-[65%] md:pt-10">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
      </div>
      <div className="p-1 bg-[#333]"></div>

      <div className="flex flex-col-reverse md:flex-row justify-around md:p-32 bg-black mix-blend-screen">
        <div className="p-7 md:p-10 md:pt-24">
          <h1 className="font-bold text-2xl pb-5 md:text-5xl md:pt-10">
            Download your shows to watch offline
          </h1>
          <p className="text-xl md:text-2xl md:w-[65%] md:pt-10">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
        <img
          className="pb-14 pt-7 md:pl-36"
          src="https://i.postimg.cc/cHyCgnd7/feature-2.png"
          alt=""
        />
      </div>
      <div className="p-1 bg-[#333]"></div>

      <div className="flex flex-col md:flex-row justify-around bg-black mix-blend-screen">
        <img
          className="pb-14 pt-7 md:pl-36"
          src="https://i.postimg.cc/nzJVcf10/feature-3.png"
          alt=""
        />
        <div className="p-7 md:p-10 md:pt-24">
          <h1 className="font-bold text-2xl pb-5 md:text-5xl md:pt-10">
            Watch everywhere
          </h1>
          <p className="text-xl md:text-2xl md:w-[65%] md:pt-10">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership
          </p>
        </div>
      </div>
      <div className="p-1 bg-[#333]"></div>

      <div className="flex flex-col-reverse md:flex-row justify-around md:p-32 bg-black mix-blend-screen">
        <div className="p-7 md:p-10 md:pt-24">
          <h1 className="font-bold text-2xl pb-5 md:text-5xl md:pt-10">
            Create profiles for kids
          </h1>
          <p className="text-xl md:text-2xl md:w-[65%] md:pt-10">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership{" "}
          </p>
        </div>
        <img
          className="pb-14 pt-7 md:pl-36"
          src="https://i.postimg.cc/rygycbRN/feature-4.png"
          alt=""
        />
      </div>
      <div className="p-1 bg-[#333]"></div>
      <div className="">
        <h1 className="pt-12 text-center text-xl font-bold md:text-4xl">
          {" "}
          Frequently Asked Questions
        </h1>
        <div className="px-[20px]  py-[10px]">
          <ul className="accordian">
            <li>
              <input
                className="checked"
                type="radio"
                name="accordian"
                id="first"
              />
              <label className="checked md:text-2xl" htmlFor="first">
                What is Netflix
              </label>
              <div className="content">
                <p>
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices. You can watch as
                  much as you want, whenever you want, without a single ad – all
                  for one low monthly price. There always something new to
                  discover, and new TV shows and movies are added every week!
                </p>
              </div>
            </li>
            <li>
              <input type="radio" name="accordian" id="second" />
              <label className="checked" htmlFor="second">
                How much does Netflix cost
              </label>
              <div className="content">
                <p>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                </p>
              </div>
            </li>

            <li>
              <input type="radio" name="accordian" id="third" />
              <label className="checked" htmlFor="third">
                Where can I watch?
              </label>
              <div className="content">
                <p>
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles. You can also
                  download your favourite shows with the iOS, Android, or
                  Windows 10 app. Use downloads to watch while your on the go
                  and without an internet connection. Take Netflix with you
                  anywhere.
                </p>
              </div>
            </li>

            <li>
              <input type="radio" name="accordian" id="fourth" />
              <label className="checked" htmlFor="fourth">
                How do I cancel?
              </label>
              <div className="content">
                <p>
                  Netflix is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees – start or stop your
                  account anytime.
                </p>
              </div>
            </li>

            <li>
              <input type="radio" name="accordian" id="fifth" />
              <label className="checked" htmlFor="fifth">
                What can I watch in Netflix?
              </label>
              <div className="content">
                <p>
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </p>
              </div>
            </li>

            <li>
              <input type="radio" name="accordian" id="sixth" />
              <label className="checked" htmlFor="sixth">
                Is Netflix good for kids?{" "}
              </label>
              <div className="content">
                <p>
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space. Kids profiles come with
                  PIN-protected parental controls that let you restrict the
                  maturity rating of content kids can watch and block specific
                  titles you don’t want kids to see.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-1 bg-[#333]"></div>
      <footer className="foot-line">
        <h4 className="pt-10 text-center md:text-left">
          Got a Questions? Call <a href="#">000-000-000-0007</a>
        </h4>
        <div className="footer flex flex-col text-center md:flex-row pt-4">
          <div className="list">
            <ul>
              <li>FAQ</li>
              <li>Media Center</li>
              <li>ways to see</li>
              <li>cookie prefrence</li>
              <li>Speed test</li>
            </ul>
          </div>

          <div className="list">
            <ul>
              <li>help center</li>
              <li>invester relations</li>
              <li>term of use</li>
              <li>corporate information</li>
              <li>legal notices</li>
            </ul>
          </div>

          <div className="list">
            <ul>
              <li>account</li>
              <li>jobs</li>
              <li>privacy</li>
              <li>Contact us</li>
              <li>only on netflix</li>
            </ul>
          </div>
        </div>
        <div className="text-center md:text-left">
          <button className="language-btn text ">
            English{" "}
            <img src="https://i.postimg.cc/J0jvRK8X/down-icon.png" alt="" />
          </button>
        </div>
        <p className= "text-center ">Netflix Clone</p>
      </footer>
    </div>
  );
}

export default Home;
