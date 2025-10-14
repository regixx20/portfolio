export default function Profile() {
  return (
    <div className="my-16 text-center">
      <img
        src="/profile.jpg"
        alt="Régix Mededji"
        className="mx-auto w-32 h-32 rounded-full border-4 border-blue-500 mb-4"
      />
      <h2 className="text-3xl font-semibold mb-2">Régix MEDEDJI</h2>
      <p className="text-gray-600 text-lg">Ingénieur Logiciel | Développeur Full Stack</p>
      <p className="mt-4 max-w-xl mx-auto text-gray-700">
        Passionné par le développement backend avec <strong>Java Spring Boot</strong> et la création d’interfaces modernes en <strong>React</strong>. 
        Actuellement en alternance chez <strong>Gatewatcher</strong>, où je conçois des microservices, des agents IA et des pipelines CI/CD.
      </p>
    </div>
  );
}
