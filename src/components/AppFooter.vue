<template>
	<footer class="footer">
		<div class="container footer__inner">
			<div class="footer__brand">
				<h3>Maria Luiza Pinto Ribeiro</h3>
				<p>Design Editorial &amp; Direção de Arte</p>
			</div>

			<div class="footer__links">
				<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
				<a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">Behance</a>
				<a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
			</div>

			<p class="footer__copy">&copy; {{ year }} Maria Luiza Pinto Ribeiro. Todos os direitos reservados.</p>
		</div>
	</footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.footer {
	background-color: var(--color-dark);
	color: var(--color-bg);
	padding: 4rem 0 2rem;
	margin-top: 6rem;
}

.footer__inner {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 2rem;
}

.footer__brand h3 {
	font-family: var(--font-serif);
	font-size: 1.5rem;
	font-weight: 400;
	margin-bottom: 0.3rem;
}

.footer__brand p {
	font-size: 0.75rem;
	letter-spacing: 0.15em;
	text-transform: uppercase;
	color: var(--color-accent-light);
}

.footer__links {
	display: flex;
	gap: 2rem;
}

.footer__links a {
	font-size: 0.8rem;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: var(--color-bg-alt);
	transition: color var(--transition);
}

.footer__links a:hover {
	color: var(--color-accent-light);
}

.footer__copy {
	font-size: 0.7rem;
	color: var(--color-text-light);
	margin-top: 1rem;
}
</style>
