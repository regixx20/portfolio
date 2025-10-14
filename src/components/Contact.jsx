export default function Contact() {
  return (
    <div className="my-16 text-center">
      <h2 className="text-2xl font-bold mb-4">📩 Contact</h2>
      <p className="text-gray-700 mb-2">
        N’hésite pas à me contacter pour discuter de projets ou opportunités.
      </p>
      <p className="text-blue-600">
        <a href="mailto:mededjiregix20@gmail.com">mededjiregix20@gmail.com</a>
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com/regixx20" target="_blank" className="text-gray-800 hover:text-blue-600">GitHub</a>
        <a href="https://www.linkedin.com/in/régix-mededji" target="_blank" className="text-gray-800 hover:text-blue-600">LinkedIn</a>
      </div>
    </div>
  );
}
