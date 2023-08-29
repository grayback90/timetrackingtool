import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-min flex-col items-center justify-between pt-24 px-24">
      <header>
        <h1 className="mb-20 underline underline-offset-3 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">TimeTrackingTool by grayback90</h1>
      </header>
      <div className="mb-10 flex flex-wrapped">
        <p className="text-red-700 ">Time left: 4,5h /// Time worked: 3,5h</p>
      </div>
      <div className="mb-10 flex flex-wrapped">
        <p className="text-green-700 ">Time left: 0h /// Time worked: 8h</p>
      </div>
      <form className="w-full max-w-full">
        <div className="flex flex-wrap -mx-3 mb-8">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Subject
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Support-13131"/>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Time (in minutes)
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="75"/>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              Company
            </label>
            <div class="relative">
              <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>SFGroup</option>
                <option>SFTech</option>
                <option>SFEvent</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </form>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 pt-50 rounded">
        Save Entry
      </button>
    </main>
  )
}
