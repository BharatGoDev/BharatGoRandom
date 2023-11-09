// import { HuddleIframe } from "@huddle01/iframe";

export default function Example() {
  return (
    <div className="bg-black">
      <div className="max-w-2xl pb-0 sm:px-6 sm:py-24 lg:max-w-7xl lg:pb-0 lg:pt-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 sm:grid-cols-2 xl:gap-x-8">
          <div className="group relative h-full flex flex-col items-center">
            {" "}
            {/* <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-50">
              <div>
                <HuddleIframe
                  roomUrl="https://iframe.huddle01.com/YOUR_ROOM_ID"
                  className="w-full aspect-video"
                />
              </div>
            </div> */}
            <div className="mt-4">
              <h3 className="text-sm text-white">
                <span aria-hidden="true" className="absolute inset-0"></span>
                Stranger
              </h3>
            </div>
          </div>

          <div className="group relative h-full flex flex-col items-center">
          {/* <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-50">
              <div>
                <HuddleIframe
                  roomUrl="https://iframe.huddle01.com/YOUR_ROOM_ID"
                  className="w-full aspect-video"
                />
              </div>
            </div> */}
            <div className="mt-4">
              <h3 className="text-sm text-white">
                <span aria-hidden="true" className="absolute inset-0"></span>
                You
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
