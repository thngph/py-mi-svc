<template>
    <div class="max-w-7xl mx-auto grid grid-cols-2 gap-4 mt-6 flex items-center justify-center h-[calc(100vh-205px)]">

        <div class="main-left ">
            <div class="p-12 bg-white border border-gray-200 rounded-lg">
                <div class="mb-6 text-2xl">Audibilizate your video ✨</div>
                <p class="mb-6 text-gray-500">
                    We will turn your video file 🎬 into audio 🔉 in the blink of an eye. <br>
                    Let's try dragging a file here!!!!!!!
                </p>

                <div class="">
                    <FileUploader/>
                </div>      
            </div>
        </div>
        <div class="main-right">
            <div class="p-12 bg-white border border-gray-200 rounded-lg">
                <div class="row float-right">
                    <button class="transform active:scale-75 transition-transform" @click="getLink">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </button>
                </div>
                <div class="mb-6 text-2xl"> Your file will be here when it's ready for download</div>
                <p v-if="!links.length" class="mb-6 text-gray-500">
                    You can reload 🔄️ to update the list. Stay tuned, have a sip ☕, and the file will be ready soon!!!    
                </p>

                <button
                    v-for="link in links" :key="link"
                    @click="download(link)"
                    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center m-1"
                >
                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>{{ link }}</span>
                </button>
                
            </div>
        </div>


        
    </div>

</template>

<script>
import axios from 'axios'
import FileUploader from '../components/FileUploader.vue'

import { useUserStore } from '@/stores/user'

export default {
    setup() {
        const userStore = useUserStore()
    return {
         userStore
        }
    },
    components: {
        FileUploader,
    },
    data() {
            return {
                links: [],
            }
        },
    methods: {
        getLink() {
            axios
                .post(`/proccessed`, {"username": this.userStore.user.email})
                .then(response => {
                    this.links=(response.data)
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(this.userStore.user.email)
                    console.log('error', error)
                })
        },
        download(link){
            axios({
                    method: 'get',
                    url: '/download',
                    responseType: 'blob',
                    params: {
                        fid: link, // Replace with the actual file ID
                    },
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    })
                    .then((response) => {
                        // Create a Blob from the response data
                        const blob = new Blob([response.data], { type: 'application/octet-stream' });

                        // Create a temporary URL for the blob
                        const url = window.URL.createObjectURL(blob);

                        // Create a link element and set its attributes for the download
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', `${link}.mp3`); // Replace with the desired file name

                        // Programmatically trigger the download
                        link.click();

                        // Clean up by revoking the temporary URL
                        window.URL.revokeObjectURL(url);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
        }
    }
}
</script>