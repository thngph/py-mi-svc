<template>
    <div
      class="file-uploader"
      @dragover="handleDragOver"
      @dragleave="handleDragLeave"
      @drop="handleDrop"
    >
      <div v-if="!file" class="drag-area">Drag and drop your file here 👉👈</div>
      <div v-else class="flex justify-between">
        <div class="inline-block">{{ file.name }}</div>
        <div class="button-group">
          <button @click="uploadFile">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
            </svg>
          </button>
          <button @click="deleteFile">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>

          </button>
        </div>  
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { useUserStore } from '@/stores/user'


  
  export default {
    setup() {
        const userStore = useUserStore()
        return {userStore}
    },
    data() {
      return {
        file: null,
        };
    },
    methods: {
      handleDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
      },
      handleDragLeave(event) {
        event.preventDefault();
      },
      handleDrop(event) {
        event.preventDefault();
        this.file = event.dataTransfer.files[0];
      },
      uploadFile() {
        const formData = new FormData();
        formData.append('file', this.file);
        
        // axios.post('http://mp3converter.com/upload', formData)

        axios.post('/upload', formData,)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            // Handle any errors
            console.log(error)
          });
      },
      deleteFile() {
        this.file = null;
      },
    },
  };
  </script>

  
  
  <style scoped>
  .file-uploader {
    border: 2px dashed #ccc;
    padding: 20px;
  }
  
  .drag-area {
    text-align: center;
    font-size: 18px;
    color: #888;
  }
  </style>