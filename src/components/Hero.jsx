export default function Hero() {

  return (
    <div class="hero min-h-screen bg-base-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0 left-0" viewBox="0 0 1440 320"><path fill="#0f1729" d="m0 256 13-11c14-10 40-32 67-69s53-91 80-107 53 6 80 11 53-5 80 27 53 106 80 117 53-43 80-64 53-11 80 0l80 32c27 11 53 21 80 11 27-11 53-43 80-54 27-10 53 0 80 16s53 38 80 48c27 11 53 11 80-10 27-22 53-64 80-102 27-37 53-69 80-58 27 10 53 64 80 106 27 43 53 75 80 54 27-22 53-96 67-134l13-37v288H0Z" /></svg>
      <div class="hero-content text-center">
        <div class="max-w-md prose lg:prose-xl">
          <h1>Hi,</h1>
          <p>My name is Phuc Trinh and I love building things with Javascript and Typescript.</p>
          <div class="flex items-center justify-center gap-4">
            <a class="btn btn-primary" href="mailto:trinhphuc0509@gmail.com">Contact Me</a>
            <a class="btn bg-green-500 text-black hover:bg-green-600" href="https://drive.google.com/drive/folders/1oN9Mg7_zUPm1qwUSTC-bJNLq9TAb-Aso?usp=sharing" target="_blank">My Résumé</a>
          </div>
        </div>
      </div>
    </div>)
}
