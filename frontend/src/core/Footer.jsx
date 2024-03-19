import { Typography } from "@material-tailwind/react";
import logo from '../assets/logo.png'

export default function FooterWithLogo() {
  return (
    <footer id="footer" className="w-full p-8 bg-slate-100">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
      <img
        className="h-8 w-auto"
        src={logo}
        alt=""
      />
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Przemysław Jura
      </Typography>
    </footer>
  );
}