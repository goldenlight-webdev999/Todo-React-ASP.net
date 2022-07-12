using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Models;
using System.Web.Http.Cors;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System;

namespace TodoApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [Route("api/[controller]")]
    public class TodoController : Controller
    {
        private readonly TodoApi.Data.TodoApiContext _context;

        public TodoController(TodoApi.Data.TodoApiContext context)
        {
            _context = context;
        }

        public List<TodoItem> TodoItems { get; set; }

        [HttpGet]
        public async Task<List<TodoItem>> GetAll()
        {
            TodoItems = await _context.TodoItem.ToListAsync();
            return TodoItems;
        }

        [HttpGet("{id}", Name = "GetTodo")]
        public async Task<IActionResult> GetById(string id)
        {
            var item = await _context.TodoItem.FirstOrDefaultAsync(t => t.Key == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] TodoItem item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            
            TodoItems = await _context.TodoItem.ToListAsync();

            item.Key = Guid.NewGuid().ToString();
            _context.TodoItem.Add(item);
            _context.SaveChanges();

            TodoItems.Add(item);
            return CreatedAtRoute("GetTodo", new { id = item.Key }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(string id, [FromBody] TodoItem item)
        {
            if (item == null || item.Key != id)
            {
                return BadRequest();
            }

            _context.TodoItem.Update(item);
            await _context.SaveChangesAsync();
           
            return new NoContentResult();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {

            var item = await _context.TodoItem.FirstOrDefaultAsync(t => t.Key == id);
            if(item != null)
            {
                _context.TodoItem.Remove(item);
                await _context.SaveChangesAsync();
            }
            
            return new NoContentResult();
        }
    }

}
