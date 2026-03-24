<template>
	<div id="home">
		<header>
			<div class="hero-content">
				<img :src="profileImage" alt="Foto de perfil" class="profile-image" />
				<div class="hero-text">
					<h1 class="firstname">{{ profileData.name }}</h1>
					<p class="lastname">{{ profileData.lastName }}</p>
					<p class="titles">{{ profileData.firstTitle }} <span>|</span> {{ profileData.secondTitle }}</p>
				</div>
				<aside>
					<div class="contacts-list">
						<a
							v-for="contact in contacts"
							:key="contact.id"
							:href="contact.link"
							target="_blank"
							rel="noopener noreferrer"
							class="contact-item"
						>
							<img :src="contact.icon" :alt="contact.id" />
						</a>
					</div>
				</aside>
			</div>
		</header>

		<main>
			<section id="sobre">
				<h2>Quem sou eu?</h2>
				<div class="description">
					<p v-for="(text, index) in profileData.description" :key="index">
						{{ text }}
					</p>
				</div>
			</section>

			<section id="experiencia">
				<h2>Trabalhos e experiência</h2>
				<div class="description">
					<p v-for="(text, index) in profileData.workDescription" :key="index">
						{{ text }}
					</p>
				</div>
			</section>

			<section id="portfolio">
				<h2>Portfólio</h2>
				<div class="projects-list">
					<div v-for="project in projects" :key="project.name" class="project-group">
						<h3 class="project-name">{{ project.name }}</h3>
						<p class="project-description">{{ project.description }}</p>
						<div class="books-list">
							<a
								v-for="book in project.books"
								:key="book.ISBN"
								:href="book.shopLink"
								target="_blank"
								rel="noopener noreferrer"
								class="book-card"
							>
								<img :src="getAmazonImage(book.shopLink)" :alt="book.name" class="book-cover" />
								<div class="book-info">
									<p class="book-title">{{ book.name }}</p>
									<div class="book-divider"></div>
									<div class="book-tags">
										<span v-for="op in book.operations" :key="op" class="tag">{{ op }}</span>
									</div>
									<dl class="book-details">
										<div class="book-detail-row">
											<dt>Ano</dt>
											<dd>{{ book.year }}</dd>
										</div>
										<div class="book-detail-row">
											<dt>Editora</dt>
											<dd>{{ book.publisher }}</dd>
										</div>
										<div class="book-detail-row">
											<dt>Publicação</dt>
											<dd>{{ book.publisment }}</dd>
										</div>
										<div class="book-detail-row">
											<dt>Páginas</dt>
											<dd>{{ book.pages }}</dd>
										</div>
										<div class="book-detail-row">
											<dt>ISBN</dt>
											<dd>{{ book.ISBN }}</dd>
										</div>
									</dl>
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>

			<section id="contato">
				<h2>Contato</h2>
				<div class="contacts-section">
					<a
						v-for="contact in contacts"
						:key="contact.id"
						:href="contact.link"
						target="_blank"
						rel="noopener noreferrer"
						class="contact-link"
					>
						<img :src="contact.icon" :alt="contact.id" />
						<span>{{ contact.id }}</span>
					</a>
				</div>
			</section>
		</main>

		<footer>
			<p>&copy; {{ year }} Maria Luiza Pinto Ribeiro</p>
		</footer>
	</div>
</template>

<script setup>
import { profile } from "../data/profile.js";
import { contacts } from "../data/contacts.js";
import { projects } from "../data/projects.js";
import profileImage from "../assets/img/profile.jpg";
import { getAmazonImage } from "../utils/amazonImage.js";

const year = new Date().getFullYear();
const profileData = profile[0];
</script>

<style scoped>
header {
	padding: 1.5rem 2rem;
	display: flex;
	justify-content: center;
	background-color: #4d4133;
	background-image:
		linear-gradient(
			0deg,
			transparent 24%,
			rgba(0, 0, 0, 0.2) 25%,
			rgba(0, 0, 0, 0.2) 25%,
			transparent 27%,
			transparent 74%,
			rgba(0, 0, 0, 0.2) 75%,
			rgba(0, 0, 0, 0.2) 76%,
			transparent 77%,
			transparent
		),
		linear-gradient(
			90deg,
			transparent 24%,
			rgba(0, 0, 0, 0.2) 25%,
			rgba(0, 0, 0, 0.2) 26%,
			transparent 27%,
			transparent 74%,
			rgba(0, 0, 0, 0.2) 75%,
			rgba(0, 0, 0, 0.2) 76%,
			transparent 77%,
			transparent
		);
	background-size: 40px 40px;
	border-bottom: 2dvh solid #6d9394;
}

main {
	display: flex;
	flex-direction: column;
}

.hero-content {
	display: flex;
	align-items: center;
	gap: 4rem;
	max-width: 1000px;
	width: 100%;
}

.profile-image {
	width: 300px;
	height: 300px;
	border-radius: 50%;
	object-fit: cover;
	flex-shrink: 0;
}

.hero-text {
	text-align: left;
	flex: 1;
}

.firstname {
	font-size: clamp(3rem, 6vw, 5rem);
	line-height: 1.1;
	margin: 0;
	color: #f9f9f9;
}

.lastname {
	font-size: clamp(1.5rem, 3vw, 2rem);
	margin: 0.25rem 0 1.5rem 0;
	opacity: 0.8;
	color: #f9f9f9;
}

.titles {
	text-transform: uppercase;
	letter-spacing: 0.2em;
	opacity: 0.6;
	margin: 0;
	color: #f9f9f9;
	font-size: clamp(0.85rem, 1.5vw, 1rem);
}

.titles span {
	margin: 0 0.5rem;
}

aside {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	margin-left: 3rem;
}

.contacts-list {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}

.contact-item {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: rgba(255, 255, 255, 0.1);
	transition: all 0.3s ease;
	text-decoration: none;
}

.contact-item:hover {
	background-color: rgba(255, 255, 255, 0.2);
	transform: scale(1.1);
}

.contact-item img {
	width: 30px;
	height: 30px;
	object-fit: contain;
}

section {
	max-width: 900px;
	margin: 0 auto;
	padding: 4rem 2rem;
	width: 100%;
}

h2 {
	font-size: 2rem;
	margin-bottom: 1.5rem;
}

.description {
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	line-height: 1.8;
	font-size: 1.05rem;
}

.description p {
	margin: 0;
}

/* Portfolio */
.projects-list {
	display: flex;
	flex-direction: column;
	gap: 3rem;
}

.project-group {
	border-left: 3px solid #6d9394;
	padding-left: 1.5rem;
}

.project-name {
	font-size: 1.4rem;
	margin: 0 0 0.5rem 0;
}

.project-description {
	font-size: 0.95rem;
	opacity: 0.7;
	margin: 0 0 1.25rem 0;
	line-height: 1.6;
}

.books-list {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.book-card {
	display: flex;
	flex-direction: row;
	gap: 1.25rem;
	padding: 1rem;
	border-radius: 6px;
	border: 1px solid rgba(109, 147, 148, 0.25);
	text-decoration: none;
	color: inherit;
	align-items: flex-start;
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease;
}

.book-card:hover {
	background-color: rgba(109, 147, 148, 0.08);
	border-color: #6d9394;
}

.book-cover {
	width: 70px;
	height: 100px;
	object-fit: cover;
	border-radius: 3px;
	flex-shrink: 0;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.book-info {
	display: flex;
	flex-direction: column;
	gap: 0.45rem;
	flex: 1;
	min-width: 0;
}

.book-title {
	font-size: 0.95rem;
	font-weight: 600;
	margin: 0;
	line-height: 1.4;
}

.book-divider {
	height: 2px;
	background-color: #6d9394;
	border-radius: 1px;
	width: 100%;
}

.book-tags {
	display: flex;
	gap: 0.4rem;
	flex-wrap: wrap;
}

.tag {
	font-size: 0.7rem;
	padding: 0.15rem 0.6rem;
	border-radius: 99px;
	background-color: rgba(109, 147, 148, 0.2);
	color: #6d9394;
	white-space: nowrap;
}

.book-details {
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	margin: 0.3rem 0 0 0;
}

.book-detail-row {
	display: flex;
	gap: 1rem;
}

.book-details dt {
	font-size: 0.72rem;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	opacity: 0.45;
	white-space: nowrap;
	min-width: fit-content;
}

.book-details dd {
	font-size: 0.8rem;
	opacity: 0.75;
	margin: 0;
}

/* Contato */
.contacts-section {
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
}

.contact-link {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	text-decoration: none;
	color: inherit;
	font-size: 1rem;
	transition: opacity 0.2s ease;
}

.contact-link:hover {
	opacity: 0.7;
}

.contact-link img {
	width: 32px;
	height: 32px;
	object-fit: contain;
}

footer {
	text-align: center;
	padding: 2rem;
	font-size: 0.85rem;
	opacity: 0.5;
}

@media (max-width: 768px) {
	.hero-content {
		flex-direction: column;
		gap: 2rem;
		text-align: center;
	}

	.hero-text {
		text-align: center;
	}

	.profile-image {
		width: 200px;
		height: 200px;
	}

	aside {
		margin-left: 0;
	}

	.contacts-list {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}

	.book-header {
		flex-direction: column;
		gap: 0.2rem;
	}

	.book-meta {
		flex-direction: column;
		align-items: flex-start;
	}
}
</style>
