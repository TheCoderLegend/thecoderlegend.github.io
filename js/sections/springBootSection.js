export function renderSpringBoot() {
  return `
    <section>
      <h2>Spring Boot Experience</h2>
      <div class="card">
        <p>• Designed REST APIs</p>
        <p>• CRUD operations</p>
        <p>• Layered architecture (Controller → Service → Repository)</p>
      </div>

      <div class="card">
        <pre>
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

  @GetMapping
  public List<Task> getTasks() {
    return taskService.getAllTasks();
  }
}
        </pre>
      </div>
    </section>
  `;
}