type Tarefa = {
  id: string
  titulo: string
}

const formularioTarefa = document.querySelector<HTMLFormElement>('#formulario-tarefa')!
const campoTarefa = document.querySelector<HTMLInputElement>('#campo-tarefa')!
const listaTarefas = document.querySelector<HTMLUListElement>('#lista-tarefas')!
const mensagemVazia = document.querySelector<HTMLParagraphElement>('#mensagem-vazia')!
const modelo = document.querySelector<HTMLTemplateElement>('#modelo-tarefa')!

const tarefas: Tarefa[] = []

function renderizar() {
  listaTarefas.replaceChildren()

  mensagemVazia.classList.toggle('hidden', tarefas.length > 0)

  for (const tarefa of tarefas) {
    const item = modelo.content.firstElementChild!.cloneNode(true) as HTMLLIElement
    item.dataset.id = tarefa.id
    item.querySelector<HTMLSpanElement>('.titulo-tarefa')!.textContent = tarefa.titulo
    listaTarefas.append(item)
  }
}

function adicionarTarefa(titulo: string) {
  tarefas.push({ id: crypto.randomUUID(), titulo })
  renderizar()
}

formularioTarefa.addEventListener('submit', (evento) => {
  evento.preventDefault()
  const titulo = campoTarefa.value.trim()
  if (!titulo) return
  adicionarTarefa(titulo)
  campoTarefa.value = ''
  campoTarefa.focus()
})

renderizar()
