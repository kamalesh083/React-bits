import GooeyNav from "@/ui/GooeyNav";

// update with your own items
const Navbar = () => {
  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div className=" bg-cyan-950 text-md pb-2 pt-2 rounded-xl relative h-fit overflow-visible">
      <GooeyNav
        items={items}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
};

export default Navbar;
