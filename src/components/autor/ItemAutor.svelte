<script lang="ts">
   export let autor: any = null;
</script>

{#if autor}
    <a  
        href="/autores/{autor.id}"
        class="flex flex-col relative 
        overflow-hidden rounded-md 
        border border-zinc-800"
    >
        <img 
            src={autor.imagem} 
            alt="Foto {autor.nome}"
            class="h-96 object-cover"
        />
        <div
            class="absolute bottom-0 w-full justify-end flex px-6 py-4 bg-black/50"
        >
            <span class="text-2xl">{autor.nome}</span>
        </div>
    </a>
{/if}