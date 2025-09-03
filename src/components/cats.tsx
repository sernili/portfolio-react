import kittieImage from "../assets/img/kitties.jpeg"

export default function CatImg() {
  return (
    <div className="relative w-full overflow-hidden rounded-full">
      <img src={kittieImage} alt="profile image" className="h-full w-full object-cover" />
      <div className="bg-primary absolute inset-0 mix-blend-color"></div>
    </div>
  )
}
