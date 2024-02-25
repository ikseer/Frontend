export default function ShowImage() {
  return (
    <div>
      <img
        src="https://placehold.co/600x400"
        alt="new Image"
        className="w-full"
        width={500}
        height={500}
      />
      <div className="flex gap-x-3 justify-center">
        <img
          src="https://placehold.co/200x200/000000/FFFFFF/png"
          alt="new Image"
          className="w-2/12"
        />
        <img
          src="https://placehold.co/200x200/000000/FFFFFF.png"
          alt="new Image"
          className="w-2/12"
        />
        <img
          src="https://placehold.co/200x200/000000/FFF"
          alt="new Image"
          className="w-2/12"
        />
      </div>
    </div>
  );
}
