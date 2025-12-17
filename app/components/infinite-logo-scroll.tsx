import Image from 'next/image'

interface Client {
  name: string;
  logo: string;
  darkBg?: boolean;
}

interface InfiniteLogoScrollProps {
  clients: Client[];
  speed?: number;
}

export function InfiniteLogoScroll({ clients, speed = 40 }: InfiniteLogoScrollProps) {
  // Duplicate the clients array to create the infinite effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="relative flex overflow-hidden group">
      {/* First set of logos */}
      <div
        className="flex animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {clients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className={`flex items-center justify-center mx-8 w-[200px] h-[100px] rounded-lg shadow-sm ${
              client.darkBg ? 'bg-neutral-900' : 'bg-white'
            }`}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={150}
              height={75}
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Duplicate set of logos for seamless loop */}
      <div
        className="flex animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {clients.map((client, index) => (
          <div
            key={`${client.name}-duplicate-${index}`}
            className={`flex items-center justify-center mx-8 w-[200px] h-[100px] rounded-lg shadow-sm ${
              client.darkBg ? 'bg-neutral-900' : 'bg-white'
            }`}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={150}
              height={75}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 