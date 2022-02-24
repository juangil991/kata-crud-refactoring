package co.com.sofka.crud.Controllers;

import co.com.sofka.crud.Dto.TodoDto;
import co.com.sofka.crud.Services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class TodoController {

    @Autowired
    private TodoService service;

    @GetMapping(value = "api/todos")
    public Iterable<TodoDto> list(@RequestParam(required = false)String groupListId){
        return service.getAllToDo(groupListId);
    }
    @GetMapping(value = "api/todos/{groupListId}")
    public Iterable<TodoDto> todoByGroupListId(@PathVariable("groupListId")String groupListId){
        return service.getAllToDo(groupListId);
    }
    
    @PostMapping(value = "api/todo")
    public TodoDto save(@RequestBody TodoDto todoDto){
        return service.saveToDo(todoDto);
    }

    @PutMapping(value = "api/todo")
    public TodoDto update(@RequestBody TodoDto todoDto){
        if(todoDto.getId() != null){
            return service.saveToDo(todoDto);
        }
        throw new RuntimeException("No existe el id para actualziar");
    }

    @DeleteMapping(value = "api/{id}/todo")
    public void delete(@PathVariable("id")Long id){
        service.deleteToDoById(id);
    }

    @DeleteMapping(value = "api/todo/{groupListId}")
    public void deleteByGroupListId(@PathVariable("groupListId")String grouplistId){
        service.deleteToDoByGroupListId(grouplistId);
    }

    @GetMapping(value = "api/{id}/todo")
    public TodoDto get(@PathVariable("id") Long id){
        return service.getTodoById(id);
    }

}
