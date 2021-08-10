import './App.css';
import bgSecond from './images/jaifv4nk.webp';
import ham1 from './images/ham1.webp';
import ham2 from './images/ham2.webp';
import ham3 from './images/ham3.webp';
import ham4 from './images/ham4.webp';
import ham5 from './images/ham5.webp';
import ham6 from './images/ham6.webp';
import foooter from './images/footer.webp';



function App() {
  return (
    <div>
      <header className="h-screen bg-cover px-12 bg-first-image">
        <nav className="px-12 space-y-12 h-full">
          <div className="space-x-7 pt-12">
            <a className="text-3xl pl-12 ml-12 purple" href="/"> چاشنی</a>
            <button className="text-gray hover:text-link">منو</button>
            <button className="text-gray hover:text-link">محصولات</button>
            <button className="text-gray hover:text-link">درباره ی ما</button>
            <button className="text-gray hover:text-link">تماس با ما</button>
          </div>
          <div className="max-w-2xl pt-32">
            <h1 className="text-5xl text-blue font-light">انواع میان وعده ی سالم با دستور پخت بومی</h1>
            <p className="py-12 text-link font-semibold">
              این یک متن نمونه است این توضیحات در آینده توسط تیم تولید محتوا اضافه خواهد شد
              این یک متن نمونه است.
            </p>
            <button className="px-6 py-4 text-sm text-white font-semibold bg-primary border border-primary hover:shadow">نمایش محصولات</button>
            <a href=" " className="px-5 font-semibold text-gray hover:text-link">تماشای ویدیو محصول</a>
            <button className="px-1 py-3 text-sm text-white rounded-full bg-primary hover:shadow">نمایش</button>
          </div>
        </nav>
      </header>
      <main>
        <div className="flex">
          <div>
            <img alt="" src={bgSecond} />
          </div>
          <div className="flex flex-wrap content-center max-w-2xl px-12">
            <h1 className="font-bold text-3xl text-darkBlue pl-12">میان وعده ی سالم و مقوی و خوشمزه پیشنهاد پزشکی مدرن و سنتی منحصرا برای شما </h1>
            <p className="text-darkGray font-semibold py-12 pl-12">این یک متن نمونه است این توضیحات در آینده توسط
              تیم تولید محتوا اضافه خواهد شد  این یک متن نمونه است. این
              یک متن نمونه است این توضیحات در آینده توسط تیم تولید محتوا اضافه خواهد
              این یک متن نمونه است.</p>
            <button className="px-12 py-4 text-sm text-white font-semibold bg-primary border border-primary hover:shadow">بیشتر بدانید</button>
          </div>
        </div>
        <div className="bg-second-image bg-cover">
          <div className="flex">
            {/* <div className="w-4/5 pr-5 flex flex-wrap content-center">
              <h1 className="font-semibold text-lg">با دستور پخت بومی انحصاری میان وعده ها
                به سفر به فرهنگ غدایی هر منطقه
              </h1>
              <p className="py-12">این یک متن نمونه است این توضیحات در آینده توسط
                تیم تولید محتوا اضافه خواهد شد  این یک متن نمونه است. این
                یک متن نمونه است این توضیحات در آینده توسط تیم تولید محتوا اضافه خواهد
                این یک متن نمونه است.
              </p>
              <button className="px-12 py-4 text-sm text-white font-semibold bg-primary border border-primary hover:shadow">بیشتر بدانید</button>
            </div> */}
            <div>
              <img alt="" src="" />
            </div>
          </div>
          <div className="bg-cover container mx-auto max-w-5xl text-center bg-forth-image p-12">
            <div className="p-6 max-w-3xl mx-auto">
              <h2 className="text-white font-bold text-3xl">عقل سالم در بدن سالم
              </h2>
              <h2 className="text-white font-bold text-3xl">
                سبک زندگی سالم با میان وعده های سالم
              </h2>
              <p className="text-white font-semibold py-6">این یک متن نمونه است این توضیحات در آینده توسط
                تیم تولید محتوا اضافه خواهد شد  این یک متن نمونه است. این
                یک متن نمونه است این توضیحات در آینده توسط تیم تولید محتوا اضافه خواهد
                این یک متن نمونه است.
              </p>
            </div>
            <div className="space-y-5">
              <button className="px-1 py-3 text-lg text-white border-2 border-white rounded-full">نمایش</button>
              <a className="block text-white" href=' '>داستان مارا تماشا کنید</a>
            </div>
          </div>
          <div className="p-12 mt-12">
            <div className="text-center pb-2">
              <h2 className="text-darkBlue font-bold text-3xl">
                میان وعده ای چاشنی
              </h2>
              <p className="text-solidGray font-semibold py-6">
                توضیحات درباره ی این قست .این یک متن نمونه است .توسط تیم تولید محتوا تصحیح خواهد شد این یک متنن مونه
              </p>
            </div>
            <div className="flex justify-center gap-9">
              <div className="shadow-price-Box rounded-b-xl w-auto">
                <img alt="" src={ham1} />
                <div className="flex flex-wrap pt-2 px-4 justify-between">
                  <p className="text-primary font-bold text-2xl">$10.50</p>
                  <h2 className="text-darkBlue font-bold text-xl">Ham Sandwich</h2>
                </div>
                <div className="text-left  max-w-xs p-4  text-solidGray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </div>
              </div>
              <div className="shadow-price-Box rounded-b-xl w-auto">
                <img alt="" src={ham2} />
                <div className="flex flex-wrap pt-2 px-4 justify-between">
                  <p className="text-primary font-bold text-2xl">$10.50</p>
                  <h2 className="text-darkBlue font-bold text-xl">Ham Sandwich</h2>
                </div>
                <div className="text-left  max-w-xs p-4  text-solidGray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </div>
              </div>
              <div className="shadow-price-Box rounded-b-xl w-auto">
                <img alt="" src={ham3} />
                <div className="flex flex-wrap pt-2 px-4 justify-between">
                  <p className="text-primary font-bold text-2xl">$10.50</p>
                  <h2 className="text-darkBlue font-bold text-xl">Ham Sandwich</h2>
                </div>
                <div className="text-left  max-w-xs p-4  text-solidGray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-9 pt-9">
              <div className="shadow-price-Box rounded-b-xl w-auto">
                <img alt="" src={ham4} />
                <div className="flex flex-wrap pt-2 px-4 justify-between">
                  <p className="text-primary font-bold text-2xl">$10.50</p>
                  <h2 className="text-darkBlue font-bold text-xl">Ham Sandwich</h2>
                </div>
                <div className="text-left  max-w-xs p-4  text-solidGray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </div>
              </div>
              <div className="shadow-price-Box rounded-b-xl w-auto">
                <img alt="" src={ham5} />
                <div className="flex flex-wrap pt-2 px-4 justify-between">
                  <p className="text-primary font-bold text-2xl">$10.50</p>
                  <h2 className="text-darkBlue font-bold text-xl">Ham Sandwich</h2>
                </div>
                <div className="text-left  max-w-xs p-4  text-solidGray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </div>
              </div>
              <div className="shadow-price-Box rounded-b-xl w-auto">
                <img alt="" src={ham6} />
                <div className="flex flex-wrap pt-2 px-4 justify-between">
                  <p className="text-primary font-bold text-2xl">$10.50</p>
                  <h2 className="text-darkBlue font-bold text-xl">Ham Sandwich</h2>
                </div>
                <div className="text-left  max-w-xs p-4  text-solidGray">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-8">
            <button className="px-12 py-4 text-sm text-white font-semibold bg-primary border border-primary hover:shadow">همه ی میان وعده ها</button>
          </div>
          <h2 className="text-darkBlue font-bold text-3xl text-center py-10">
            محبوب ترین ها در چاشنی
          </h2>
          <div className="shadow-price-Box container mx-auto">
            <h2 className="text-darkBlue font-bold text-3xl text-center py-10">
              آیا میخواهید پیشنهاد تیم پزشکی ما را داشته باشید؟

            </h2>
            <div className="flex justify-center">
              <input className="rounded-r-md focus:outline-none bg-anotherGray px-8 w-1/3" placeholder="example@yourmail.com" />
              <button className="px-12 py-4 text-sm text-white font-semibold rounded-l-md rounded-r-0 bg-primary border border-primary hover:shadow">ثبت نام</button>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="space-x-7 pt-12 border-t-1">

                  <a className="text-3xl pl-12 ml-12 purple" href="/"> چاشنی</a>
                  <button className="text-gray hover:text-link">منو</button>
                  <button className="text-gray hover:text-link">محصولات</button>
                  <button className="text-gray hover:text-link">درباره ی ما</button>
                  <button className="text-gray hover:text-link">تماس با ما</button>
                  <p className="text-gray">Copyright©Arifur Rahman, 2019. All rights reserved</p>
                </div>
                <div className="relative h-auto w-2/3">
                  <img alt="" className="absolute -bottom-60 -left-60" src={foooter} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
