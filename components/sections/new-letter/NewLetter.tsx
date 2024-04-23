export const NewLetter = () => {
  return (
    <section className="py-16 bg-primary-300 rounded-3xl">
      <div className="container">
        <div className="grid sm:grid-cols-2 gap-3">
          <h2 className="text-title leading-none">
            Your Source for Green Energy Updates
          </h2>

          <div className="flex sm:flex-row flex-col sm:gap-3 sm:items-center justify-center">
            <input
              placeholder="Your e-mail"
              className="py-3 px-6 rounded-full sm:w-[330px] mb-3 sm:mb-0"
            />
            <button className="px-6 py-3 bg-primary-950 rounded-full text-white">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
