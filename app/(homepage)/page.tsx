import { TopMenu } from "../components/shared/index";

export default function HomePage() {
  return (
    <div className="grid gap-4 h-screen bg-midnight-moss p-5 px-36">
      <TopMenu />
      <div className="bg-green-100">
        <div>2</div>
        <div>2</div>
      </div>
      <div className="bg-green-500 h-fit mt-auto mx-auto">
        <div className="mx-auto w-fit">[ V ]</div>
        <div>© 2025 / Cauã OSP</div>
      </div>
    </div>
  );
}
