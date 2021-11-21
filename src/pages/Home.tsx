import UnstyledLink from '@/components/UnstyledLink'

export default function Home() {
	return (
		<>
			<main>
				<section className='bg-blue-700'>
					<div className='flex flex-col items-center justify-center min-h-screen text-white layout'>
						<UnstyledLink href='https://github.com/theodorusclarence/vite-react-tailwind-starter'>
							<h1>Vite React TypeScript Tailwind Starter</h1>
						</UnstyledLink>
						<p className='mb-4'>
							By{' '}
							<UnstyledLink href='https://github.com/AdiletBekmuratov'>
								Adilet Bekmuratov
							</UnstyledLink>
						</p>

						<div className='mt-8 text-dark'>
							<p className='text-[#ffe347]'>JIT is on</p>
						</div>
						<footer className='absolute text-gray-300 bottom-2'>
							© {new Date().getFullYear()}{' '}
							<UnstyledLink href='https://github.com/AdiletBekmuratov'>
								Adilet Bekmuratov
							</UnstyledLink>
						</footer>
					</div>
				</section>
			</main>
		</>
	);
}
