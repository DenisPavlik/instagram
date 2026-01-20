"use client";
import Masonry from "react-masonry-css";

const images = [
  "https://picsum.photos/id/43/1024/768",
  "https://picsum.photos/id/44/768/1024",
  "https://picsum.photos/id/45/1024/768",
  "https://picsum.photos/id/46/768/1024",
  "https://picsum.photos/id/47/1024/768",
  "https://picsum.photos/id/48/768/1024",
  "https://picsum.photos/id/49/1024/768",
  "https://picsum.photos/id/50/768/1024",
  "https://picsum.photos/id/51/1024/768",
  "https://picsum.photos/id/52/1024/768",
  "https://picsum.photos/id/53/768/1024",
  "https://picsum.photos/id/54/1024/768",
  "https://picsum.photos/id/55/768/1024",
  "https://picsum.photos/id/56/1024/768",
  "https://picsum.photos/id/57/768/1024",
  "https://picsum.photos/id/58/1024/768",
  "https://picsum.photos/id/59/768/1024",
  "https://picsum.photos/id/60/1024/768",
  "https://picsum.photos/id/61/768/1024",
  "https://picsum.photos/id/62/1024/768",
  "https://picsum.photos/id/63/768/1024",
];

export default function PostsGrid() {
  return (
    <div className="max-w-4xl mx-auto">
      <Masonry
      breakpointCols={{
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
      }}
      className="flex -ml-4"
      columnClassName="pl-4"
    >
      {images.map((src) => (
        <div key={src} className="mb-6 overflow-hidden rounded-md">
          <img src={src} alt="" className="block w-full" />
        </div>
      ))}
    </Masonry>
    </div>
  );
}
