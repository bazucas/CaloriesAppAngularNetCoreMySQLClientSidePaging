using API.Enum;

namespace API.Helpers
{
    public class MealParams
    {
        private const int MaxPageSize = 20;
        public int PageNumber { get; set; } = 1;
        private int pageSize = 10;
        public int PageSize
        {
            get { return pageSize;}
            set { pageSize = (value > MaxPageSize) ? MaxPageSize : value;}
        }

        public int Id { get; set; }
        public string Description { get; set; }
        public string Email { get; set; }
        public RoleEnum Role { get; set; }
    }
}