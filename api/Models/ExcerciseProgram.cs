namespace api.Models
{
    public class ExcerciseProgram
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public List<Excercise> Excercises { get; set; }
    }
}
