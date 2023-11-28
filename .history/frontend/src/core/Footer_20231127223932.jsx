import { Typography } from "@material-tailwind/react";

export default function FooterWithLogo() {
  return (
    <footer id="footer" className="w-full p-8 bg-slate-100">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
      <img
        className="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
        alt=""
      />

            <Typography
              as="a"
              color="blue-gray"
              className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
            >
              About Us
            </Typography>

      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
    </footer>
  );
}