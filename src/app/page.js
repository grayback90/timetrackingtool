import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-min flex-col items-center justify-between pt-24 px-24">
      <header>
        <h1 className="underline underline-offset-3 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">TimeTrackingTool by grayback90</h1>
      </header>
      <div className="mt-10 mb-10 flex flex-wrapped">
        <p className="text-red-700 ">Time left: 5,5h /// Time worked: 2,5h</p>
      </div>
      <div className="mb-10 flex flex-wrapped">
        <p className="text-green-700 ">Time left: 0h /// Time worked: 8h</p>
      </div>
      <form className="w-full max-w-full">
        <div className="flex flex-wrap -mx-3 mb-8">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Subject
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Support-13131"/>
          </div>
          <div className="w-full md:w-1/3 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Time (in minutes)
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="75"/>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
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
      <section class="mt-10 container mx-auto p-6 font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th class="px-4 py-3">Subject</th>
                  <th class="px-4 py-3">Time</th>
                  <th class="px-4 py-3">Company</th>
                  <th class="px-4 py-3">Date</th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr class="text-gray-700">
                  <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                      <div>
                        <p class="font-semibold text-black">Support-13131</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-ms font-semibold border">75</td>
                  <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> SFGroup </span>
                  </td>
                  <td class="px-4 py-3 text-sm border">30.08.2023</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                      <div>
                        <p class="font-semibold text-black">Support-12121</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-ms font-semibold border">60</td>
                  <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> SFTech </span>
                  </td>
                  <td class="px-4 py-3 text-sm border">30.08.2023</td>
                </tr>
                <tr class="text-gray-700">
                  <td class="px-4 py-3 border">
                    <div class="flex items-center text-sm">
                      <div>
                        <p class="font-semibold text-black">Daily</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-4 py-3 text-ms font-semibold border">15</td>
                  <td class="px-4 py-3 text-xs border">
                    <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Meeting </span>
                  </td>
                  <td class="px-4 py-3 text-sm border">30.08.2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}
