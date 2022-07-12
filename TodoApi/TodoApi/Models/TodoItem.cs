using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models
{
    public class TodoItem
    {
        [Key]
        public string Key { get; set; }
        public string Name { get; set; }
        public int IsComplete { get; set; }
    }
}
