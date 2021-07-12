import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";
const DocumentCreate = () => {
  return (
    <section className="bg-[#F8F9FA] pb-10 px-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between py-6">
          <h2 className="text-gray-700 text-lg">Start a new document</h2>
          <Button
            color="gray"
            buttonType="outline"
            rounded={true}
            iconOnly={true}
            ripple="dark"
            className="border-0"
          >
            <Icon name="more_vert" size="3xl" />
          </Button>
        </div>
        <div>
          <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-300">
            <Image
              src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"
              layout="fill"
            />
          </div>
          <p className="ml-2 mt-2 font-light text-sm text-gray-700">Blank</p>
        </div>
      </div>
    </section>
  );
};

export default DocumentCreate;
