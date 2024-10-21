namespace api.Models
{
    public class Excercise
    {
        public string Name { get; set; } = "New Excercise";
        public int PerceivedExcertion { get; set; }
    }
    public class StrengthExcercise : Excercise
    {
        public int Sets { get; set; }
        public int Weight { get; set; }
        public int Repetitions { get; set; }
        public string? MuscleGroup { get; set; }
    }
    public class ConditioningExcercise : Excercise
    {
        public int? Time { get; set; }
        public int? AveragePace { get; set; }
        public int? Distance { get; set; }
    }
}

