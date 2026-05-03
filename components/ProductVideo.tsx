export default function ProductVideo() {
  return (
    <section className="w-full bg-black flex flex-col">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-auto object-cover"
      >
        <source src="/slowly_turing_the_product_202605030405.mp4" type="video/mp4" />
      </video>

      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-auto object-cover"
      >
        <source src="/Turn_model_360_degrees_202605030425.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
