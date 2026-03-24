import { calculateAge } from "../utils/calculateAge.js";

export const profile = [
	{
		name: "Maria Luiza",
		lastName: "Pinto Ribeiro",
		firstTitle: "Tradutora",
		secondTitle: "Revisora",
		birthDate: "1995-03-24",
		// Cada parágrafo do array representa um parágrafo do texto de descrição
		description: [
			`Olá! Eu me chamo Maria Luiza.`,
			`Tenho ${calculateAge(new Date("1995-08-15"))} anos e sou apaixonada por livros.`,
			`Leitora desde os três anos de idade, almejei trabalhar com livros desde muito pequena: cursei a graduação de Letras na Universidade Federal do Ceará até o sexto semestre, mas migrei para a área da saúde, onde me formei em Fisioterapia.`,
			`Entretanto, nunca deixei de lado a vontade de ler livros antes que o resto do mundo, e minha bagagem literária me permitiu ingressar no ramo editorial, participando de diversos projetos interessantes no ramo da literatura e do RPG.`,
		],
		workDescription: [
			"Participei em projetos incríveis desde a sua fundamentação, como o Forbidden Lands e a crescente coleção Aventuras para Quinta Edição, além de outros materiais lançados para a 5ª Edição, assim como o Tome of Beasts e Cthulhu Mythos.",
			"Também houve bastante espaço para os clássicos old-school como o DCC RPG e o Old-School Essentials, bem como diversos módulos de aventura lançados para ambos.",
			"Fiz parte, ainda, de toda a coleção atualmente lançada do famoso Tales from the Loop, e estou participando de excelentes projetos que ainda são um segredo...",
		],
		experienceTime: `${calculateAge(new Date("2018-07-01"))} anos`,
		languages: ["Português (nativo)", "Inglês (fluente)"],
		tools: ["Pacote Office", "Pacote Adobe", "Smartcat", "Outras Cats Tools"],
		disponibility: "Atuação Remota",
	},
];
