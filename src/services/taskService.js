import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks() {
  return taskRepository.findAll();
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}

export async function getTaskById(id) { 
  const task =  await taskRepository.find(id);
  if (task) return task;
  else { 
    const error = new Error('Task not found');
    error.status = 404;
    throw error;
  }
}
