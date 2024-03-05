import { ModeToggle } from "./ModeToggle";

export default function Sidebar() {
  return (
    <div className="flex-1 max-w-96 w-full sticky top-0 inset-x-0 py-20 px-6 flex flex-col border-r">
      <div className="flex flex-col">
        <div className="bg-secondary rounded-lg w-36 h-36"></div>
        <div className="flex flex-col gap-1 my-4">
          <h1 className="font-bold text-2xl">Abdullahi Salihu</h1>
          <p className="text-base">Versatile Developer</p>
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 rounded-full bg-secondary"></span>
            <p className="text-sm">Open to work</p>
          </div>
        </div>
      </div>
    </div>
  );
}
