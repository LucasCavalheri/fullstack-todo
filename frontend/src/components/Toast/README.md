# 🎉 Sistema de Toast

Sistema de notificações toast global para a aplicação, seguindo o design system.

## 📦 Componentes Criados

- **ToastContext** - Context API para gerenciamento global
- **ToastProvider** - Provider que envolve a aplicação
- **Toast** - Componente visual do toast
- **ToastContainer** - Container que renderiza todos os toasts
- **useToast** - Hook para usar dentro de componentes React
- **toast** (API global) - Para usar em qualquer lugar (services, utils, etc)

## 🎨 Tipos de Toast

- ✅ **success** - Verde (`--success`)
- ❌ **error** - Vermelho (`--danger`)
- ℹ️ **info** - Azul (`--blue`)
- ⚠️ **warning** - Amarelo (`--warning`)

## 🚀 Como Usar

### Opção 1: Hook `useToast` (dentro de componentes React)

```tsx
import { useToast } from '../contexts/ToastContext'

function MyComponent() {
  const toast = useToast()

  function handleClick() {
    // Com título e descrição
    toast.success({
      title: 'Sucesso!',
      description: 'Operação realizada com sucesso.',
    })

    // Apenas título
    toast.error({ title: 'Erro ao processar' })

    // Outros tipos
    toast.info({ title: 'Informação importante' })
    toast.warning({ title: 'Atenção!' })
  }

  return <button onClick={handleClick}>Mostrar Toast</button>
}
```

### Opção 2: API Global `toast` (em qualquer lugar)

```tsx
import { toast } from '../lib/toast'

// Em services
async function deleteTask(id: string) {
  try {
    await api.delete(`/tasks/${id}`)
    
    toast.success({
      title: 'Tarefa deletada!',
      description: 'A tarefa foi removida com sucesso.',
    })
  } catch (error) {
    toast.error({
      title: 'Erro ao deletar',
      description: 'Não foi possível deletar a tarefa.',
    })
  }
}

// Em utils
function validateForm(data: any) {
  if (!data.email) {
    toast.warning({ title: 'Email é obrigatório' })
    return false
  }
  return true
}
```

## ⚙️ Configuração

O sistema já está configurado no `App.tsx`:

```tsx
<ToastProvider>
  <AuthProvider>
    {/* Suas rotas */}
    <ToastContainer />
  </AuthProvider>
</ToastProvider>
```

## 🎯 Características

- ✅ Auto-remove após 5 segundos
- ✅ Botão de fechar manual
- ✅ Animação de entrada suave
- ✅ Responsivo (mobile-friendly)
- ✅ Múltiplos toasts simultâneos
- ✅ Cores do design system
- ✅ Ícones contextuais
- ✅ TypeScript completo

## 📱 Interface

```typescript
interface ToastData {
  title: string
  description?: string
}

// Métodos disponíveis
toast.success(data: ToastData)
toast.error(data: ToastData)
toast.info(data: ToastData)
toast.warning(data: ToastData)
```

## 🎨 Design System

Cores utilizadas:
- Success: `var(--success)` - #4ade80
- Error: `var(--danger)` - #e25858
- Info: `var(--blue)` - #4ea8de
- Warning: `var(--warning)` - #fbbf24
- Background: `var(--gray-500)` - #262626
- Text: `var(--gray-100)` - #f2f2f2
