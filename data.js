export const USER_LOGIN = "Wanderley@stv.org";
export const USER_PASSWORD = "@w122jnheush";
export const ADMIN_LOGIN = "ArgnaldAndersen@stv.org.eg";
export const ADMIN_PASSWORD = "Vladmirandersen";

export const dossierDocs = [
  {
    id: "doc-1",
    category: "Dossiê",
    type: "Capa",
    title: "Dossiê Interno — Projeto Sanguinis",
    code: "CAPA-00",
    classification: "INTERNO / RECUPERADO / CIRCULAÇÃO RESTRITA",
    status: "Compilado",
    date: "--/--/20██",
    author: "Arquivo reunido",
    adminOnly: false,
    content: `Material reunido a partir de seis documentos encontrados na Unidade Rubra, fachada operacional “Boate Véspera”.

Compilação preparada para uso interno.

Os documentos abaixo foram organizados na ordem em que se referenciam: HEMA-11, ABE-06, V-12 e LUX-02. As observações atribuídas a “DS” foram mantidas em destaque por aparecerem repetidamente nas cópias recuperadas.

Ordem sugerida de leitura:
• Memorando interno
• HEMA-11
• ABE-06
• V-12
• LUX-02
• Folha solta encontrada no arquivo frio`,
  },
  {
    id: "doc-2",
    category: "Dossiê",
    type: "Memorando",
    title: "UNIDADE RUBRA — MEMORANDO INTERNO",
    code: "MEM-UR-01",
    classification: "Interno — circulação restrita",
    status: "Recuperado",
    date: "14/08/20██",
    author: "Coordenação █████████",
    adminOnly: false,
    content: `ORIGEM: Setor de Pesquisa / Subsolo Técnico / Boate Véspera
ASSUNTO: Padronização de linguagem, fluxo documental e sigilo operacional

A partir desta data, fica reforçado que a casa Véspera continua classificada como célula de pesquisa, validação e refino, e não como unidade principal de produção. A movimentação da pista, camarotes, camarins e estoque frontal segue servindo como cobertura, triagem e distribuição limitada de amostras em circulação controlada.

Toda documentação relativa à Sanguinis deve usar apenas codinomes, códigos de setor ou identificação parcial. Nomes civis completos ficam restritos ao caderno-mãe e ao arquivo frio. Relatórios soltos, cópias de bancada, folhas de observação clínica e fichas de lote não devem carregar assinaturas reais, com exceção das linhas já protegidas por tarja no original físico.

Os relatórios-base para leitura obrigatória são os seguintes: HEMA-11, ABE-06, V-12 e LUX-02. Qualquer técnico novo que entre pelo corredor branco deve ler nessa ordem. Isso não é cerimônia; é para impedir pergunta repetida e erro idiota de bancada.

Reforço também que a Sanguinis não deve ser descrita como “droga comum” em comunicação interna. O material tem dependência comportamental, resposta variável por perfil de usuário e degradação específica em contato com certos espectros de luz. Tratar como entorpecente genérico é o tipo de descuido que faz alguém testar coisa errada no lugar errado.

Responsável de emissão: Coordenação █████████
Distribuição autorizada: “Maré”, “Corvo”, “Vidro”, Dr. █████ █████, Téc. ███████ ███████

[Anotação DS] Quem ainda chama isso aqui de fábrica não entendeu o que a casa faz. A produção pesada não passa por nós.
[Anotação DS] Leitura correta começa em HEMA-11. Sempre.`,
  },
  {
    id: "doc-3",
    category: "Dossiê",
    type: "Relatório técnico",
    title: "RELATÓRIO TÉCNICO HEMA-11",
    code: "HEMA-11",
    classification: "Interno — sensível",
    status: "Recuperado",
    date: "16/08/20██",
    author: "Dr. █████ █████",
    adminOnly: false,
    content: `TÍTULO TÉCNICO: Formação da base hemocerebral induzida
ORIGEM: Sala Branca 2 / Núcleo de Coleta e Resposta

A base ativa da Sanguinis não nasce pronta e não responde de forma útil quando extraída de fonte comum. O material-base com melhor rendimento continua sendo a fração hemocerebral humana obtida sob indução elétrica dirigida, com ativação controlada de áreas associadas a medo, euforia, apego, raiva e impulso de sobrevivência. Não interessa apenas o sangue. Interessa o estado em que esse sangue foi forçado a existir.

Os testes feitos sem modulação emocional produziram material fraco, opaco e curto demais para valer o descarte. Já as amostras obtidas sob sequência elétrica correta apresentaram retenção muito superior, maior aderência no refino posterior e resposta mais “limpa” quando levadas ao estado mineral.

Foi observado que diferentes emoções predominantes alteram a “personalidade” da pedra. Amostras puxadas com carga de pânico sustentam melhor resposta imediata em humanos. Amostras puxadas com raiva ou excitação predatória apresentam melhor sincronia com usuários vampíricos, ainda que cobrem mais do organismo em seguida. Apego e euforia geram lotes bonitos à vista, mas menos confiáveis em campo.

A maior parte da equipe insiste em resumir o processo como “sangue do cérebro”. O termo é ruim, vulgar e tecnicamente preguiçoso, mas pegou entre o pessoal da bancada. Para fins oficiais, manter “base hemocerebral induzida”.

O material, nesta etapa, continua instável. Sem refino rubro, ele oxida mal, responde mal e morre rápido demais fora da blindagem.

Acompanhamento: “Maré”, Biól. ███████ ███████, “Risco”
Validação final: █████████ ███████

[Anotação DS] Parem de escrever “sangue do cérebro” na etiqueta. Isso é coisa de açougue, não de pesquisa.
[Anotação DS] Sem ABE-06 isso não segura forma, não segura cor e não segura efeito. Leiam o próximo.`,
  },
  {
    id: "doc-4",
    category: "Dossiê",
    type: "Relatório técnico",
    title: "RELATÓRIO TÉCNICO ABE-06",
    code: "ABE-06",
    classification: "Interno — sensível",
    status: "Recuperado",
    date: "18/08/20██",
    author: "“Vidro”",
    adminOnly: false,
    content: `TÍTULO TÉCNICO: Refino rubro, cristalização e estabilidade fotossensível
ORIGEM: Câmara Selada / Corredor Leste

A base hemocerebral induzida demonstrou ganho de estabilidade e retenção de efeito quando refinada com pó de absinto e sangue vampírico processado. A mistura final, quando bem conduzida, assume aspecto mineral rubro, vivo, chamativo e comercialmente sedutor. Entre a equipe, consolidou-se o uso do termo “pedra” por simplicidade.

O absinto em pó não entra aqui por exotismo ou gosto estético. Ele serve como trilho. Puxa, prende e ajuda a dar corpo ao que antes era só matéria nervosa insistindo em morrer. O sangue vampírico, por sua vez, age como selo de permanência e vetor de transição. Sem ele, o material até cristaliza em casos raros, mas quebra efeito cedo demais ou responde de forma errada ao corpo do usuário.

A coloração rubra intensa foi mantida em quase todos os lotes aprovados. Os lotes sem brilho, puxando para ferrugem seca, mostraram baixa aceitação entre usuários humanos e custo alto demais entre vampiros. O mercado prefere o que brilha. O corpo também.

Quanto à estabilidade, a observação se mantém: luz ultravioleta acelera perda de cor, perda de corpo e perda de efeito. A pedra não apaga de uma vez; ela vai cedendo, como se secasse por dentro. Sob exposição solar direta, no entanto, o processo é muito mais agressivo. Em campo aberto, a dissolução é rápida, com sumiço progressivo da estrutura até não restar praticamente nada.

A equipe do corredor leste insiste em tratar isso como “sensibilidade de estoque”. Não é só isso. É fraqueza estrutural.

Coleta associada: Dr. █████ █████ / “Maré”
Aprovação de setor: █████████ ███████

[Anotação DS] Foi pra isso que eu pedi cortina total, caixa preta e lâmpada certa no leste. Não foi capricho.
[Anotação DS] Ao sol, essa coisa some como água doce no mar. Quem perder lote por luz vai pagar em serviço.
[Anotação DS] Cruzem com V-12. Efeito bonito em bancada não ganha briga nem segura usuário.`,
  },
  {
    id: "doc-5",
    category: "Dossiê",
    type: "Relatório",
    title: "RELATÓRIO V-12",
    code: "V-12",
    classification: "Interno — restrito",
    status: "Recuperado",
    date: "21/08/20██",
    author: "Téc. ███████ ███████",
    adminOnly: false,
    content: `ORIGEM: Sala de Observação / Ala Fundos

Os efeitos da Sanguinis seguem divididos em dois grandes grupos de resposta.

Em humanos, o consumo gera janela curta de elevação física e sensorial, com reflexo acima da linha basal, tolerância à dor, explosão de impulso e sensação de poder que costuma ser descrita de forma parecida com relatos populares sobre dampiros. O usuário não vira um, nem chega perto de sustentar aquilo por muito tempo. O que existe é uma aproximação bruta, intensa e enganosa. Justamente por isso vicia rápido. A queda vem cedo, o corpo sente falta do pico e a cabeça cola na lembrança da melhora.

Também foram observadas alterações comportamentais após uso repetido: obsessão pelo próximo fragmento, irritabilidade, agressividade de defesa, apego súbito à fonte de fornecimento e, em alguns casos, sensação de identidade “melhorada” enquanto sob efeito. O vício não é só químico. É emocional. A pedra convence o sujeito de que a melhor versão dele existe ali dentro.

Em vampiros, a resposta é mais perigosa e mais útil. Houve aumento de agressividade funcional, aceleração predatória e redução de travas comportamentais sem queda total no raciocínio. Parte da equipe descreveu isso como “bestialidade controlada”. O termo foi mantido por conveniência, mas é impreciso. O que ocorre não é controle da Besta em sentido pleno; é contenção orientada por impulso. O vampiro entra mais perto da margem, mas continua capaz de mirar, escolher e terminar o que começou.

O custo, por outro lado, é claro: quanto mais pedra consumida, maior a cobrança de sangue do próprio corpo vampírico. Em ingestões leves, a perda é administrável. Em consumo médio, o efeito sobe bem, mas a fome aparece cedo. Em ingestão alta, há ganho brutal de capacidade por janela curta, seguido de cobrança violenta do reservatório interno. Em resumo: a pedra entrega mais, mas arranca o troco do sangue do próprio usuário.

Nenhum teste em ambiente de pista deve passar da faixa média sem autorização dupla.

Observadores: “Corvo”, “Vidro”, Dr. █████ █████
Assinatura de liberação: █████████ ███████

[Anotação DS] Não escrevam “controle” em material externo. Aqui dentro até passa. Na prática, é contenção por janela curta.
[Anotação DS] Quem inventou de testar faixa alta perto da pista me deve uma noite inteira de limpeza. Ver LUX-02.`,
  },
  {
    id: "doc-6",
    category: "Dossiê",
    type: "Incidente",
    title: "REGISTRO DE INCIDENTE LUX-02",
    code: "LUX-02",
    classification: "Interno — urgente",
    status: "Recuperado",
    date: "23/08/20██",
    author: "███████ ███████",
    adminOnly: true,
    content: `ORIGEM: Cabine técnica / Frente operacional da Boate Véspera

Às 03h17, durante ajuste de iluminação no eixo lateral do salão, houve acionamento indevido de conjunto UV de varredura instalado para outro fim. A exposição atingiu corredor de transporte interno que, naquele momento, carregava amostras do lote SR-9 e duas unidades de observação em deslocamento.

Dezessete fragmentos apresentaram perda rápida de brilho e erosão superficial ainda em bandeja. Em menos de quatro minutos, oito já haviam virado resíduo seco. Os demais perderam valor operacional antes do recolhimento. Uma das unidades humanas entrou em quadro de abstinência abrupta e pânico reativo. A unidade vampírica respondeu com agressividade organizada, avançando em busca do que restava do lote degradado e deixando claro que o efeito ainda estava presente, embora falhando.

O problema não foi de estoque. Foi de fluxo mal pensado e confiança demais em equipe de fachada. A boate continua útil como cobertura, mas não foi feita para conviver com material sensível sem disciplina de corredor. Quem opera luz de palco não devia ter acesso ao caminho do leste.

Foi determinado, após o incidente, que o remanescente íntegro do lote e a cópia limpa do caderno de respostas fossem retirados do trânsito comum. O material foi realocado para o arquivo frio, gaveta 3, acesso pelo camarim B, atrás do painel falso onde antes ficava o módulo de som reserva. O trajeto antigo fica encerrado até segunda ordem.

Cientes: “Corvo”, “Vidro”, Segurança █████ █████
Autorização final: █████████ ███████

[Anotação DS] Eu avisei que luz errada mata lote. Agora tá registrado.
[Anotação DS] Moveram o que presta pra gaveta 3. Quem chegou até aqui já sabe mais que devia.`,
  },
  {
    id: "doc-7",
    category: "Dossiê",
    type: "Folha solta",
    title: "FOLHA SOLTA ENCONTRADA NO ARQUIVO FRIO — GAVETA 3",
    code: "ARQ-FRIO-DS",
    classification: "Sem timbre oficial",
    status: "Apreendido",
    date: "03/09/20██",
    author: "DS",
    adminOnly: true,
    content: `ORIGEM PROVÁVEL: Arquivo frio / camarim B / painel falso
ESTADO: Dobrado em quatro, com marcas de sangue seco e pó vermelho nas bordas

Pra parar de me perguntarem a mesma coisa toda semana:

A Sanguinis não é milagre, não é misticismo barato e não é produto de esquina. Ela funciona porque pega um sangue humano já empurrado até o limite por impulso fabricado, dá permanência com sangue vampírico e prende tudo numa estrutura que o corpo lê como promessa. Em humano, vende a sensação de estar acima de si mesmo. Em vampiro, empurra a Besta pra frente sem arrancar o volante de imediato. Nos dois casos, cobra caro depois.

Se a pedra estiver bonita demais e brilhando seca, desconfiem do lote. Se estiver sem brilho nenhum, também não prestem. O ponto certo continua sendo rubro vivo, translúcido nas bordas, sem esfarelar no toque. Guardem longe de UV. Longe do sol, sempre. Isso já custou pesquisa demais.

A Véspera não fabrica o mundo. A Véspera aprende. O que sai daqui não é volume; é versão melhorada. Quem quer quantidade procura outro porão. Quem quer entender por que um lote faz um homem se sentir quase nascido da noite e outro faz um vampiro atravessar cinco corpos sem perder a cabeça vem pra cá.

Parem de usar nome real em papel solto. Principalmente o meu.

— DS

[Anotação DS] Se alguém ainda não entendeu a ordem: HEMA-11, ABE-06, V-12, LUX-02. Foi feita assim por um motivo.`,
  },
];

export const emails = [
  {
    id: "mail-1",
    category: "E-mails",
    type: "Email interno",
    title: "triagem da remessa pequena",
    code: "MAIL-01",
    classification: "Interno",
    status: "Recuperado",
    date: "03/09/20██ — 01:14",
    author: "De: Maré → Para: Risco",
    adminOnly: false,
    content: `Não manda mais o material novo para a ala de observação sem me avisar antes.

Eu cheguei no fundo achando que iam testar resposta de abstinência comum e encontrei três fichas sem idade preenchida, todas marcadas só com altura, peso e tolerância prévia. Quando perguntei, o pessoal do corredor branco disse que era “mais fácil assim” e que a diferença era estatística. Não é.

Se isso partiu de você, me responde logo. Se não partiu, então alguém está usando sua senha ou o seu nome para carimbar coisa que não devia estar entrando.

E antes que venha com conversa atravessada: eu vi as pulseiras. Aquilo não era erro de arquivo.

— M.`,
  },
  {
    id: "mail-2",
    category: "E-mails",
    type: "Email interno",
    title: "RE: triagem da remessa pequena",
    code: "MAIL-02",
    classification: "Interno",
    status: "Recuperado",
    date: "03/09/20██ — 01:31",
    author: "De: Risco → Para: Maré",
    adminOnly: false,
    content: `Não saiu de mim.

Eu autorizei duas observações leves para lote de baixa estabilidade, ambas com perfil civil padrão e idade regular, como sempre. O que entrou além disso não passou pela minha mesa. Se tinha ficha incompleta, alguém abriu caminho por fora.

Apaga essa mensagem depois de ler.

E não fala “pulseira” em texto. Você sabe por quê.

— R.`,
  },
  {
    id: "mail-3",
    category: "E-mails",
    type: "Email interno",
    title: "dúvida sobre faixa de resposta",
    code: "MAIL-03",
    classification: "Interno",
    status: "Recuperado",
    date: "03/09/20██ — 02:08",
    author: "De: Téc. ███████ ███████ → Para: Vidro",
    adminOnly: false,
    content: `Você já viu lote SR-11 pegar forte demais em organismo abaixo da faixa esperada?

Estou perguntando porque os relatórios de ontem vieram esquisitos. Não estou falando de efeito bonito, estou falando de resposta rápida demais, tremor, euforia curta, depois um vazio horrível que nem parece da mesma substância. Não combina com o padrão dos adultos da pista nem com o pessoal drenado do fundo.

Se isso tiver a ver com a diferença de massa, me fala agora. Se não tiver, alguém misturou grupo sem registrar.

Antes que perguntem: eu não fui eu que puxei a planilha. Ela já estava aberta quando sentei.

— T.`,
  },
  {
    id: "mail-4",
    category: "E-mails",
    type: "Email interno",
    title: "RE: dúvida sobre faixa de resposta",
    code: "MAIL-04",
    classification: "Interno",
    status: "Recuperado",
    date: "03/09/20██ — 02:19",
    author: "De: Vidro → Para: Téc. ███████ ███████",
    adminOnly: false,
    content: `Já vi resposta mais violenta em corpo menor, sim, mas não nesses termos.

Se o relatório parece curto, rápido e vazio depois, não é só variação de massa. Tem coisa errada na origem, no perfil ou em quem aprovou o uso. E, sinceramente, nem devia existir relatório com essa dúvida dentro da Véspera.

Não abre mais nada que esteja sem cabeçalho completo. E se alguém te entregar folha sem data e sem idade, você me chama ou chama a DS. Não tenta resolver sozinho.

Tem assunto que, se subir torto até ela, cai cabeça.

— V.`,
  },
  {
    id: "mail-5",
    category: "E-mails",
    type: "Email interno",
    title: "ocorrência no corredor branco",
    code: "MAIL-05",
    classification: "Interno",
    status: "Recuperado",
    date: "03/09/20██ — 03:02",
    author: "De: Segurança █████ █████ → Para: Coordenação █████████",
    adminOnly: false,
    content: `Registrando sem floreio: houve discussão no corredor branco entre “Maré”, dois técnicos sem pseudônimo fixo e um terceiro funcionário do estoque que eu não reconheci de plantões anteriores.

O motivo aparente foi acesso a sala de observação auxiliar. A palavra mais repetida foi “triagem”, seguida de “faixa” e “sem aval”. Ninguém falou alto o suficiente para eu pegar tudo, mas ouvi “quando a Chefe souber” duas vezes.

Não houve agressão física. Houve, no entanto, tentativa de recolher folhas da bancada antes da minha chegada. Peguei duas pela metade. Uma delas tinha referência a resposta exacerbada de Sanguinis em organismo não conforme. A outra estava tão riscada que não dava para ler quase nada.

Estou anexando as cópias do que sobrou no envelope físico, não por terminal.

— Segurança`,
  },
  {
    id: "mail-6",
    category: "E-mails",
    type: "Email interno",
    title: "ela descobriu",
    code: "MAIL-06",
    classification: "Interno",
    status: "Recuperado",
    date: "03/09/20██ — 03:27",
    author: "De: Corvo → Para: Vidro",
    adminOnly: false,
    content: `A DS já viu.

Não sei quem levou primeiro, mas ela entrou no leste como quem já sabia o que ia encontrar. Passou pela bancada, pegou as fichas incompletas, olhou uma por uma e perguntou só uma vez quem tinha autorizado. Ninguém respondeu. Nem os dois idiotas do branco.

Mandou travar a auxiliar, recolher todos os registros que tivessem faixa omitida e cortar acesso dos terminais 4, 6 e 9. Também proibiu circular lote SR-11 até revisão completa.

A frase exata foi: “Pesquisa torta eu corrijo. Isso aqui eu enterro.”

Se tiver qualquer cópia em gaveta, some com ela antes que a coordenação finja que não sabia.

— C.`,
  },
  {
    id: "mail-7",
    category: "E-mails",
    type: "Email interno",
    title: "interrupção imediata e auditoria interna",
    code: "MAIL-07",
    classification: "Chefia",
    status: "Ativo",
    date: "03/09/20██ — 03:41",
    author: "De: DS → Para: Coordenação █████████",
    adminOnly: true,
    content: `Interrompa toda e qualquer linha de observação vinculada às fichas sem idade declarada, com medida corporal incompatível com protocolo adulto ou oriundas de remessa sem validação dupla.

Bloqueie o corredor branco até eu terminar a revisão física do que foi escondido ali. Suspenda SR-11, SR-11B e qualquer derivação lançada na mesma janela operacional. Nenhum fragmento sai da Véspera até segunda ordem.

Se alguém tentou justificar isso como ganho de resposta, previsão de mercado ou “curva promissora”, já adianto: não vou discutir termo bonito para encobrir burrice ou desvio. A casa pesquisa Sanguinis, não improvisa em cima de corpo que não devia sequer ter entrado na conta.

Quero nome, senha usada, terminal acessado e cadeia de autorização. Não me tragam só pseudônimo.

— DS`,
  },
  {
    id: "mail-8",
    category: "E-mails",
    type: "Email interno",
    title: "RE: interrupção imediata e auditoria interna",
    code: "MAIL-08",
    classification: "Chefia",
    status: "Recuperado",
    date: "03/09/20██ — 04:05",
    author: "De: Coordenação █████████ → Para: DS",
    adminOnly: true,
    content: `Recebido.

O corredor branco já foi isolado e os terminais 4, 6 e 9 estão fora da rede. A equipe do estoque alega que recebeu as fichas já fechadas e que não conferiu origem por entender que o carimbo vinha “de cima”. Ainda não está claro quem usou essa desculpa primeiro.

Encontramos menção cruzada a um arquivo chamado BER-3 em duas máquinas. O conteúdo em si já não abre, mas o nome aparece junto de SR-11 e de uma pasta antiga da ala de observação. Não sabemos se é relatório, planilha ou rascunho.

Também localizamos três mensagens apagadas da caixa de saída do terminal 6. O cabeçalho incompleto sugere contato externo, mas sem destinatário legível.

Aguardando suas ordens sobre retenção ou descarte.

— Coord.`,
  },
  {
    id: "mail-9",
    category: "E-mails",
    type: "Email interno",
    title: "sobre o que eu vi",
    code: "MAIL-09",
    classification: "Interno",
    status: "Recuperado",
    date: "03/09/20██ — 04:22",
    author: "De: Maré → Para: DS",
    adminOnly: false,
    content: `Eu não autorizei nada, e não vou levar isso calado se tentarem empurrar para quem estava no plantão comum.

Quando desci, já tinham separado material por tamanho, não por nome. Tinha uma caixa menor, sem etiqueta de pista, e uma prancheta com colunas curtas demais para ficha adulta. Não precisei ver muito para entender a direção daquilo.

Também tinha comentário à mão no canto de uma folha, dizendo que a resposta “abria mais rápido” e que talvez isso reduzisse custo de sangue na ponta vampírica por causa da intensidade inicial. Não sei de quem era a letra.

Se isso nasceu como ideia de pesquisa sobre a Sanguinis, alguém passou da linha muito antes de pôr gente no quarto.

— M.`,
  },
  {
    id: "mail-10",
    category: "E-mails",
    type: "Email interno",
    title: "RE: sobre o que eu vi",
    code: "MAIL-10",
    classification: "Chefia",
    status: "Ativo",
    date: "03/09/20██ — 04:31",
    author: "De: DS → Para: Maré",
    adminOnly: true,
    content: `Eu sei que não foi você.

Guarde só o que consegue provar e pare de repetir detalhes no corredor. A partir de agora, quem falar disso fora da minha frente ou da frente da coordenação vai servir de cortina para quem realmente fez.

E presta atenção: não existiu “linha promissora”, não existiu “ajuste de faixa”, não existiu “brecha de protocolo”. Existiu gente achando que podia esconder sujeira atrás de resultado rápido. Acabou.

Se encontrar BER-3 antes deles, não abre do terminal da casa. Me entrega fechado.

— DS`,
  },
  {
    id: "mail-11",
    category: "E-mails",
    type: "Email interno",
    title: "BER-3",
    code: "MAIL-11",
    classification: "Interno",
    status: "Recuperado",
    date: "03/09/20██ — 05:02",
    author: "De: Vidro → Para: Corvo",
    adminOnly: false,
    content: `Eu lembrava desse nome.

BER-3 apareceu meses atrás, antes do incidente de luz, quando ainda estavam tentando vender a ideia de que certas respostas extremas em humano tornariam a pedra “mais competitiva” na rua. Foi engavetado porque os dados eram ruins, a conversa era pior e ninguém queria por escrito o que tinham testado para chegar ali.

Se puxaram isso de volta agora, foi porque alguém quis reutilizar pedaço velho de pesquisa como se fosse base válida para lote novo. É típico do branco quando acha que a DS está ocupada demais com refino e pista.

Se eu achar cópia, eu não salvo no sistema. Imprimo e levo na mão.

— V.`,
  },
  {
    id: "mail-12",
    category: "E-mails",
    type: "Aviso geral",
    title: "aviso único",
    code: "MAIL-12",
    classification: "Chefia",
    status: "Ativo",
    date: "03/09/20██ — 06:10",
    author: "De: DS → Para: Todos os setores internos",
    adminOnly: true,
    content: `Leiam uma vez só.

Qualquer tentativa de reiniciar, defender, maquiar ou renomear a linha interrompida nesta madrugada será tratada como sabotagem interna. Não quero debate técnico, justificativa comercial nem retrospectiva criativa sobre o que “poderia render”.

A Sanguinis já nos dá trabalho suficiente com lotes instáveis, resposta variável e perda por luz. Eu não preciso de imbecil tentando empurrar atalho porque viu número subir numa folha torta.

O que foi feito sem aval está encerrado. O que foi registrado será recolhido. O que foi apagado eu ainda vou descobrir quem apagou.

Voltem para o que a casa faz. O resto morreu hoje.

— DS`,
  },
];

export const allDocs = [...dossierDocs, ...emails];
